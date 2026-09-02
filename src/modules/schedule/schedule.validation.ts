import { z } from "zod";

// Matches "HH:mm" format, e.g. "08:00", "14:30"
const timeStringField = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format");

// Returns today's date at midnight, so we can compare "date only"
// (ignoring the current time-of-day) when checking if a schedule
// date has already passed.
function getStartOfToday(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

// POST /schedule/:accommodationId
export const createScheduleSchema = z.object({
  params: z.object({
    accommodationId: z.string().uuid("Invalid accommodation id"),
  }),
  body: z
    .object({
      cleanerId: z.string().uuid("Invalid cleaner id"),
      date: z.coerce.date(),
      checkOutTime: timeStringField,
      checkInTime: timeStringField,
      notes: z.string().optional(),
    })
    .refine((data) => data.checkOutTime < data.checkInTime, {
      message: "checkOutTime must be earlier than checkInTime",
      path: ["checkOutTime"],
    })
    .refine((data) => data.date >= getStartOfToday(), {
      message: "You cannot schedule a cleaning for a date that has already passed",
      path: ["date"],
    }),
});

export const scheduleIdParamSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
});

// PATCH /schedule/host/:scheduleId
export const editScheduleSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
  body: z
    .object({
      date: z.coerce.date().optional(),
      checkOutTime: timeStringField.optional(),
      checkInTime: timeStringField.optional(),
      notes: z.string().optional(),
    })
    .refine(
      (data) =>
        !data.checkOutTime || !data.checkInTime || data.checkOutTime < data.checkInTime,
      {
        message: "checkOutTime must be earlier than checkInTime",
        path: ["checkOutTime"],
      }
    )
    .refine((data) => !data.date || data.date >= getStartOfToday(), {
      message: "You cannot reschedule a cleaning to a date that has already passed",
      path: ["date"],
    }),
});

// PATCH /schedule/cleaner/:scheduleId/respond
export const respondToScheduleSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
  body: z.object({
    action: z.enum(["accept", "refuse"]),
  }),
});

// PATCH /schedule/cleaner/:scheduleId/proof
export const submitProofSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
  body: z.object({
    proofNotes: z.string().optional(),
  }),
});

// PATCH /schedule/host/:scheduleId/invalidate
export const invalidateScheduleSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
  body: z.object({
    reason: z.string().min(1, "A reason is required to invalidate a task"),
  }),
});

// PATCH /schedule/cleaner/:scheduleId/dispute
export const reportDisputeSchema = z.object({
  params: z.object({
    scheduleId: z.string().uuid("Invalid schedule id"),
  }),
  body: z.object({
    reason: z.string().min(1, "A reason is required to report a dispute"),
  }),
});