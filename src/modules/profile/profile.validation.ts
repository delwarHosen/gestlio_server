import { z } from "zod";

// Used by both Host and Cleaner - every field is optional because
// each role only sends the fields relevant to them.
//
// .strict() means: "role", "email", or any field NOT listed here will
// cause a validation error instead of being silently accepted/ignored.
// This is how we lock role and email from ever being changed through
// this endpoint - they simply are not allowed in the request body at all.
export const updateMeSchema = z.object({
  body: z
    .object({
      firstName: z.string().min(1).optional(),
      lastName: z.string().min(1).optional(),
      phone: z.string().optional(),
      about: z.string().optional(),
      playerId: z.string().optional(),

      // Cleaner-only fields (siretNumber is intentionally NOT here -
      // it is set once via the mandatory setup wizard and then locked)
      workCity: z.string().optional(),
      serviceRadius: z.coerce.number().int().min(1).max(100).optional(),
      availability: z.enum(["full_time", "part_time", "flexible"]).optional(),
      licenseNumber: z.string().optional(),
      biography: z.string().optional(),
      interventionZone: z.string().optional(),
      // sent as a comma separated string from the client, e.g. "French,English"
      languages: z.string().optional(),
      servicesOffered: z.string().optional(),
    })
    .strict("You are not allowed to update: role, email, or any other unlisted field"),
});

// The mandatory post-signup Cleaner onboarding wizard.
// Unlike updateMeSchema, these fields are REQUIRED (not optional) because
// this step cannot be skipped - the whole wizard is submitted once, at the end.
export const setupCleanerProfileSchema = z.object({
  body: z.object({
    siretNumber: z
      .string()
      .regex(/^\d{14}$/, "SIRET number must be exactly 14 digits"),
    workCity: z.string().min(1, "City is required"),
    workLatitude: z.coerce.number().min(-90).max(90),
    workLongitude: z.coerce.number().min(-180).max(180),
    serviceRadius: z.coerce.number().int().min(1).max(100),
    availability: z.enum(["full_time", "part_time", "flexible"]),
    licenseNumber: z.string().min(1, "License number is required"),
    // Optional: the current UI screens don't have a dedicated input for these,
    // so they may or may not be sent by the client.
    interventionZone: z.string().optional(),
    // comma separated string from the client, e.g. "French,English"
    languages: z.string().optional(),
    servicesOffered: z.string().optional(),
    // Biography stays optional - the UI marks it "(Optional)"
    biography: z.string().optional(),
  }),
});