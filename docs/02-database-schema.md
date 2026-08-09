# Database Schema (MongoDB / Mongoose)

All collections use ObjectId `_id`, `createdAt`/`updatedAt` timestamps (Mongoose `timestamps: true`). Relationships are referenced by ObjectId (not embedded), except small fixed-shape sub-documents (quiz questions, homework attachments) which are embedded.

## `users`
| Field | Type | Notes |
|---|---|---|
| name | string | |
| email | string | unique, lowercase |
| passwordHash | string | bcrypt |
| role | enum | `admin` \| `teacher` \| `student` |
| phone | string? | |
| avatarUrl | string? | |
| status | enum | `active` \| `inactive` |
| mustResetPassword | boolean | true for admin-created temp passwords |
| tokenVersion | number | bumped on password reset to invalidate old refresh tokens |
| assignedTeacherId | ObjectId → users? | student-only; implemented as a field on `users` rather than a separate `studentprofiles` collection — simpler for a 1:1 relation with no profile-only fields |
| courseId | ObjectId → courses? | student-only; current course, same rationale as above |

## `courses`
| Field | Type | Notes |
|---|---|---|
| title | string | e.g. "Beginner English" |
| level | number | 1–4 |
| description | string | |
| thumbnailUrl | string? | |
| isPublished | boolean | |
| createdBy | ObjectId → users | |

## `modules`
| Field | Type | Notes |
|---|---|---|
| courseId | ObjectId → courses | |
| title | string | |
| order | number | |

## `lessons`
| Field | Type | Notes |
|---|---|---|
| moduleId | ObjectId → modules | |
| title | string | |
| order | number | |
| slidesUrl | string? | PowerPoint |
| pdfUrls | string[] | |
| videoUrls | string[] | |
| resources | \[{label, url}\] | misc links/files |

## `enrollments`
| Field | Type | Notes |
|---|---|---|
| studentId | ObjectId → users | |
| courseId | ObjectId → courses | |
| teacherId | ObjectId → users? | |
| progressPercent | number | 0–100, derived from completedLessonIds |
| completedLessonIds | ObjectId[] | |
| status | enum | `active` \| `completed` \| `paused` |

## `classschedules`
| Field | Type | Notes |
|---|---|---|
| courseId | ObjectId → courses | |
| teacherId | ObjectId → users | |
| studentIds | ObjectId[] → users | |
| date | Date | calendar day |
| startTime | string | `"HH:mm"` |
| durationMinutes | number | |
| meetLink | string | Google Meet URL, display-only |
| status | enum | `upcoming` \| `live` \| `completed` \| `cancelled` |
| remindersSent | \{h24: boolean, h1: boolean\} | dedupe flags for cron |

## `homeworks`
| Field | Type | Notes |
|---|---|---|
| lessonId | ObjectId → lessons? | |
| classId | ObjectId → classschedules? | |
| title, description | string | |
| attachmentUrl | string? | |
| dueDate | Date | |
| assignedBy | ObjectId → users | |
| assignedTo | ObjectId[] → users | |

## `homeworksubmissions`
| Field | Type | Notes |
|---|---|---|
| homeworkId | ObjectId → homeworks | |
| studentId | ObjectId → users | |
| fileUrl / text | string? | one or both |
| submittedAt | Date | |
| grade | number? | |
| feedback | string? | |
| gradedAt | Date? | |

## `quizzes`
| Field | Type | Notes |
|---|---|---|
| lessonId | ObjectId → lessons? | |
| courseId | ObjectId → courses? | |
| title | string | |
| questions | \[{text, options[], correctIndex}\] | embedded |
| passingScore | number | percent |

## `quizattempts`
| Field | Type | Notes |
|---|---|---|
| quizId | ObjectId → quizzes | |
| studentId | ObjectId → users | |
| answers | number[] | selected option index per question |
| score | number | percent |
| submittedAt | Date | |

## `attendances`
| Field | Type | Notes |
|---|---|---|
| classId | ObjectId → classschedules | |
| studentId | ObjectId → users | |
| status | enum | `present` \| `absent` \| `late` |
| markedBy | ObjectId → users | |

## `announcements`
| Field | Type | Notes |
|---|---|---|
| authorId | ObjectId → users | |
| scope | enum | `course` \| `class` \| `global` |
| scopeId | ObjectId? | courseId or classId when scoped |
| title, message | string | |

## `emaillogs`
| Field | Type | Notes |
|---|---|---|
| to | string | |
| type | enum | registration, assignment, class-scheduled, reminder-24h, reminder-1h, homework-assigned, homework-graded, password-reset, course-completed |
| subject | string | |
| status | enum | `sent` \| `failed` \| `skipped-no-provider` |
| relatedEntity | \{model, id\}? | |

## `certificates`
| Field | Type | Notes |
|---|---|---|
| studentId | ObjectId → users | |
| courseId | ObjectId → courses | |
| certificateNumber | string | unique |
| issuedAt | Date | |

## `passwordresettokens`
| Field | Type | Notes |
|---|---|---|
| userId | ObjectId → users | |
| tokenHash | string | |
| expiresAt | Date | 1 hour |

## Indexes

- `users.email` unique
- `courses.level` 
- `classschedules.{date, teacherId}`, `{date, studentIds}`
- `enrollments.{studentId, courseId}` unique compound
- `passwordresettokens.tokenHash` unique, TTL index on `expiresAt`
