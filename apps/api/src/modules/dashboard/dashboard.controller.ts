import { Controller, Get } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { UsersService } from "../users/users.service";
import { CoursesService } from "../courses/courses.service";
import { ClassesService } from "../classes/classes.service";
import { HomeworkService } from "../homework/homework.service";
import { AnnouncementsService } from "../announcements/announcements.service";

@Controller("dashboard")
export class DashboardController {
  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService,
    private classesService: ClassesService,
    private homeworkService: HomeworkService,
    private announcementsService: AnnouncementsService,
  ) {}

  @Get("admin")
  @Roles(Role.Admin)
  async admin() {
    const [totalStudents, totalTeachers, totalCourses, recent, todaysClasses, upcomingClasses] =
      await Promise.all([
        this.usersService.countByRole(Role.Student),
        this.usersService.countByRole(Role.Teacher),
        this.coursesService.count(),
        this.usersService.recentRegistrations(5),
        this.classesService.countUpcomingToday(),
        this.classesService.countUpcoming(),
      ]);

    return {
      totalStudents,
      totalTeachers,
      totalCourses,
      todaysClasses,
      upcomingClasses,
      recentRegistrations: recent.map((u) => ({
        id: String(u._id),
        name: u.name,
        role: u.role,
        createdAt: u.createdAt,
      })),
    };
  }

  @Get("teacher")
  @Roles(Role.Teacher)
  async teacher(@CurrentUser() user: JwtPayload) {
    const [myStudentsCount, todaysClasses, upcomingClasses, homeworkAwaitingGrading] =
      await Promise.all([
        this.usersService.countStudentsForTeacher(user.sub),
        this.classesService.countUpcomingToday({ teacherId: user.sub }),
        this.classesService.countUpcoming({ teacherId: user.sub }),
        this.homeworkService.countAwaitingGrading(user.sub),
      ]);
    return { myStudentsCount, todaysClasses, upcomingClasses, homeworkAwaitingGrading };
  }

  @Get("student")
  @Roles(Role.Student)
  async student(@CurrentUser() user: JwtPayload) {
    const me = await this.usersService.findById(user.sub);
    const [upcomingClasses, pendingHomework, course, teacher, latestAnnouncement] =
      await Promise.all([
        this.classesService.countUpcoming({ studentId: user.sub }),
        this.homeworkService.countPendingForStudent(user.sub),
        me?.courseId ? this.coursesService.findById(String(me.courseId)) : null,
        me?.assignedTeacherId ? this.usersService.findById(String(me.assignedTeacherId)) : null,
        me?.assignedTeacherId
          ? this.announcementsService.findLatestForTeacher(String(me.assignedTeacherId))
          : null,
      ]);
    return {
      upcomingClasses,
      pendingHomework,
      course: course && { id: String(course._id), title: course.title, level: course.level },
      teacher: teacher && { id: String(teacher._id), name: teacher.name, email: teacher.email },
      latestAnnouncement: latestAnnouncement && {
        id: String(latestAnnouncement._id),
        title: latestAnnouncement.title,
        message: latestAnnouncement.message,
        createdAt: latestAnnouncement.createdAt,
      },
    };
  }
}
