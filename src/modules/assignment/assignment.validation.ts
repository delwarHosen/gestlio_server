import { z } from "zod";
import { ASSIGNMENT_ROLE } from "../../constants/assignment";

const assignmentRoleEnum = z.enum([
  ASSIGNMENT_ROLE.PRIMARY,
  ASSIGNMENT_ROLE.SUBSTITUTE,
]);

// POST /assignment/:accommodationId
export const assignCleanerSchema = z.object({
  params: z.object({
    accommodationId: z.string().uuid("Invalid accommodation id"),
  }),
  body: z.object({
    cleanerId: z.string().uuid("Invalid cleaner id"),
    role: assignmentRoleEnum,
    pricePerCleaning: z.coerce.number().min(0, "Price is required"),
    message: z.string().optional(),
  }),
});

// GET /assignment/:accommodationId
export const accommodationIdParamSchema = z.object({
  params: z.object({
    accommodationId: z.string().uuid("Invalid accommodation id"),
  }),
});

// PATCH /assignment/:assignmentId/role
export const changeCleanerRoleSchema = z.object({
  params: z.object({
    assignmentId: z.string().uuid("Invalid assignment id"),
  }),
  body: z.object({
    role: assignmentRoleEnum,
  }),
});

// PATCH /assignment/:assignmentId/complete
export const completeAssignmentParamSchema = z.object({
  params: z.object({
    assignmentId: z.string().uuid("Invalid assignment id"),
  }),
});

// DELETE /assignment/:assignmentId
export const assignmentIdParamSchema = z.object({
  params: z.object({
    assignmentId: z.string().uuid("Invalid assignment id"),
  }),
});

// PATCH /assignment/:assignmentId/respond  (Cleaner: accept / refuse)
export const respondToRequestSchema = z.object({
  params: z.object({
    assignmentId: z.string().uuid("Invalid assignment id"),
  }),
  body: z.object({
    action: z.enum(["accept", "refuse"]),
  }),
});
