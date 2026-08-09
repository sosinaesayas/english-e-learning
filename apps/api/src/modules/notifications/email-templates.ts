const shell = (title: string, body: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #1f2937;">
    <h2 style="color: #4338ca;">${title}</h2>
    ${body}
    <p style="margin-top: 32px; font-size: 12px; color: #9ca3af;">English Academy</p>
  </div>
`;

export const welcomeEmail = (name: string, email: string, tempPassword: string, resetUrl: string) =>
  shell(
    "Welcome to English Academy",
    `<p>Hi ${name},</p>
     <p>An account has been created for you.</p>
     <p><b>Email:</b> ${email}<br/><b>Temporary password:</b> ${tempPassword}</p>
     <p>Please <a href="${resetUrl}">set your own password</a> before logging in.</p>`,
  );

export const passwordResetEmail = (resetUrl: string) =>
  shell(
    "Reset your password",
    `<p>We received a request to reset your password.</p>
     <p><a href="${resetUrl}">Click here to choose a new password</a>. This link expires in 1 hour.</p>
     <p>If you didn't request this, you can safely ignore this email.</p>`,
  );

export const teacherAssignedEmail = (studentName: string, teacherName: string) =>
  shell(
    "Teacher assigned",
    `<p>Hi ${studentName},</p><p>${teacherName} has been assigned as your teacher.</p>`,
  );

export const classScheduledEmail = (
  courseName: string,
  dateLabel: string,
  timeLabel: string,
  meetLink: string,
) =>
  shell(
    "New class scheduled",
    `<p>A class has been scheduled for <b>${courseName}</b>.</p>
     <p><b>Date:</b> ${dateLabel}<br/><b>Time:</b> ${timeLabel}</p>
     <p><a href="${meetLink}">Google Meet link</a></p>`,
  );

export const classReminderEmail = (courseName: string, timeLabel: string, meetLink: string, hoursBefore: number) =>
  shell(
    `Class reminder — starts in ${hoursBefore}h`,
    `<p>Your class for <b>${courseName}</b> starts at ${timeLabel}.</p>
     <p><a href="${meetLink}">Join on Google Meet</a></p>`,
  );

export const homeworkGradedEmail = (title: string, grade: number, feedback?: string) =>
  shell(
    "Homework graded",
    `<p>Your homework "${title}" has been graded: <b>${grade}%</b></p>
     ${feedback ? `<p>Feedback: ${feedback}</p>` : ""}`,
  );

export const courseCompletedEmail = (courseName: string) =>
  shell(
    "Congratulations — course completed!",
    `<p>You've completed <b>${courseName}</b>. Your certificate is ready in your dashboard.</p>`,
  );
