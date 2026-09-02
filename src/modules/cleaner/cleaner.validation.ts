import { z } from "zod";

// GET /cleaner
export const getCleanersSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).max(100).optional().default(10),
    search: z.string().optional(), // matches firstName or lastName
    city: z.string().optional(), // matches workCity
    availability: z.enum(["full_time", "part_time", "flexible"]).optional(),
  }),
});

export const cleanerIdParamSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid cleaner id"),
  }),
});