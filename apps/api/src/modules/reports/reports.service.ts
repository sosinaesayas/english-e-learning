import { Injectable } from "@nestjs/common";
import { Role, COURSE_LEVEL_LABEL, AttendanceStatus } from "@tutor/shared";
import { UsersService } from "../users/users.service";
import { CoursesService } from "../courses/courses.service";
import { ClassesService, computeStatus } from "../classes/classes.service";
import { QuizzesService } from "../quizzes/quizzes.service";

@Injectable()
export class ReportsService {
  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService,
    private classesService: ClassesService,
    private quizzesService: QuizzesService,
  ) {}

  async enrollmentByCourse() {
    const [courses, grouped] = await Promise.all([
      this.coursesService.findAll(),
      this.usersService.studentsGroupedByCourse(),
    ]);
    const counts = new Map(grouped.map((g) => [String(g._id), g.count]));
    return courses
      .slice()
      .sort((a, b) => a.level - b.level)
      .map((c) => ({
        courseId: String(c._id),
        title: c.title,
        level: c.level,
        levelLabel: COURSE_LEVEL_LABEL[c.level as 1 | 2 | 3 | 4] ?? c.title,
        studentCount: counts.get(String(c._id)) ?? 0,
      }));
  }

  async teacherWorkload() {
    const [teachers, grouped] = await Promise.all([
      this.usersService.findByRole(Role.Teacher),
      this.usersService.studentsGroupedByTeacher(),
    ]);
    const counts = new Map(grouped.map((g) => [String(g._id), g.count]));
    return teachers.map((t) => ({
      teacherId: String(t._id),
      name: t.name,
      email: t.email,
      studentCount: counts.get(String(t._id)) ?? 0,
    }));
  }

  async classStats() {
    const classes = await this.classesService.countByStatus();
    const stats = { total: classes.length, upcoming: 0, live: 0, completed: 0, cancelled: 0 };
    for (const cls of classes) {
      stats[computeStatus(cls)]++;
    }
    return stats;
  }

  async attendanceSummary() {
    const classes = await this.classesService.attendanceRecords();
    const stats = { present: 0, absent: 0, late: 0, unmarked: 0 };
    for (const cls of classes) {
      const markedIds = new Set(cls.attendance.map((a) => String(a.studentId)));
      for (const a of cls.attendance) {
        if (a.status === AttendanceStatus.Present) stats.present++;
        else if (a.status === AttendanceStatus.Absent) stats.absent++;
        else if (a.status === AttendanceStatus.Late) stats.late++;
      }
      for (const studentId of cls.studentIds) {
        if (!markedIds.has(String(studentId))) stats.unmarked++;
      }
    }
    return stats;
  }

  async quizReport() {
    const rows = await this.quizzesService.quizAverageScore();
    const overallAverage = rows.length
      ? Math.round(rows.reduce((sum, r) => sum + r.averageScore, 0) / rows.length)
      : 0;
    return {
      overallAverage,
      quizzes: rows.map((r) => ({
        quizId: String(r._id),
        title: r.title,
        averageScore: Math.round(r.averageScore),
        attemptCount: r.attemptCount,
      })),
    };
  }
}
