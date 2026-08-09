import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Quiz, QuizDocument } from "./schemas/quiz.schema";
import { CreateQuizDto, AttemptQuizDto } from "./dto/quiz.dto";

const POPULATE = [{ path: "courseId", select: "title level" }];

@Injectable()
export class QuizzesService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}

  findForTeacher(teacherId: string) {
    return this.quizModel.find({ teacherId }).sort({ createdAt: -1 }).populate(POPULATE);
  }

  findForCourse(courseId: string) {
    return this.quizModel.find({ courseId }).sort({ createdAt: -1 }).populate(POPULATE);
  }

  async findOne(id: string) {
    const quiz = await this.quizModel.findById(id).populate(POPULATE);
    if (!quiz) throw new NotFoundException("Quiz not found");
    return quiz;
  }

  async create(dto: CreateQuizDto, teacherId: string) {
    const quiz = await this.quizModel.create({ ...dto, teacherId });
    return quiz.populate(POPULATE);
  }

  async remove(id: string, teacherId: string) {
    const res = await this.quizModel.deleteOne({ _id: id, teacherId });
    if (res.deletedCount === 0) throw new NotFoundException("Quiz not found");
  }

  async attempt(id: string, studentId: string, dto: AttemptQuizDto) {
    const quiz = await this.quizModel.findById(id);
    if (!quiz) throw new NotFoundException("Quiz not found");

    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (dto.answers[i] === q.correctIndex) correct++;
    });
    const score = Math.round((100 * correct) / quiz.questions.length);

    const existingIdx = quiz.attempts.findIndex((a) => String(a.studentId) === studentId);
    const attempt = { studentId, answers: dto.answers, score, submittedAt: new Date() };
    if (existingIdx >= 0) {
      quiz.attempts[existingIdx] = attempt as any;
    } else {
      quiz.attempts.push(attempt as any);
    }
    await quiz.save();
    return quiz.populate(POPULATE);
  }

  quizAverageScore() {
    return this.quizModel.aggregate([
      { $unwind: "$attempts" },
      {
        $group: {
          _id: "$_id",
          title: { $first: "$title" },
          averageScore: { $avg: "$attempts.score" },
          attemptCount: { $sum: 1 },
        },
      },
    ]);
  }
}
