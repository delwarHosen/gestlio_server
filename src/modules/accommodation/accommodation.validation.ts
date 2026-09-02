import { z } from "zod";
import { ACCOMMODATION_TYPE } from "../../constants/accommodationType";

const accommodationTypeEnum = z.enum([
  ACCOMMODATION_TYPE.APARTMENT,
  ACCOMMODATION_TYPE.HOUSE,
  ACCOMMODATION_TYPE.STUDIO,
  ACCOMMODATION_TYPE.VILLA,
  ACCOMMODATION_TYPE.OTHER,
]);

// Comes from form-data as an ISO string like "2026-08-30T11:00:00.000Z",
// so we convert it to a Date object
const dateTimeField = z.coerce.date();

// All fields come from form-data as strings,
// so we coerce/transform number and boolean fields into their correct types
export const createAccommodationSchema = z.object({
  body: z
    .object({
      name: z.string().min(1, "Name is required"),
      accommodationType: accommodationTypeEnum,
      address: z.string().min(1, "Address is required"),
      city: z.string().min(1, "City is required"),
      zipCode: z.string().min(1, "Zip code is required"),
      floor: z.string().optional(),
      doorCode: z.string().optional(),
      numberOfRooms: z.coerce.number().int().min(0, "Number of rooms is required"),
      surface: z.coerce.number().min(0).optional(),
      hasElevator: z
        .string()
        .optional()
        .transform((val) => val === "true" || val === "1"),
      cleaningRate: z.coerce.number().min(0, "Cleaning rate is required"),

      checkOutDateTime: dateTimeField.optional(),
      nextCheckinDateTime: dateTimeField.optional(),

      notes: z.string().optional(),
      keys: z.string().optional(),
      accessCode: z.string().optional(),
      instructions: z.string().optional(),
      frequency: z.string().optional(),
    })
    .refine(
      (data) =>
        !data.checkOutDateTime ||
        !data.nextCheckinDateTime ||
        data.checkOutDateTime < data.nextCheckinDateTime,
      {
        message: "checkOutDateTime must be earlier than nextCheckinDateTime",
        path: ["checkOutDateTime"],
      }
    ),
});

// GET /accommodation?page=1&limit=10&search=&city=&accommodationType=
export const getMyAccommodationsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).max(100).optional().default(10),
    search: z.string().optional(),
    city: z.string().optional(),
    accommodationType: accommodationTypeEnum.optional(),
  }),
});

// Used for get-by-id, update, and delete operations - all of them take the id as a URL parameter
export const accommodationIdParamSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid accommodation id"),
  }),
});

// Uses the same fields as create, but every field is optional since this is a partial update
export const updateAccommodationSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid accommodation id"),
  }),
  body: z
    .object({
      name: z.string().min(1).optional(),
      accommodationType: accommodationTypeEnum.optional(),
      address: z.string().min(1).optional(),
      city: z.string().min(1).optional(),
      zipCode: z.string().min(1).optional(),
      floor: z.string().optional(),
      doorCode: z.string().optional(),
      numberOfRooms: z.coerce.number().int().min(0).optional(),
      surface: z.coerce.number().min(0).optional(),
      hasElevator: z
        .string()
        .optional()
        .transform((val) => (val === undefined ? undefined : val === "true" || val === "1")),
      cleaningRate: z.coerce.number().min(0).optional(),

      checkOutDateTime: dateTimeField.optional(),
      nextCheckinDateTime: dateTimeField.optional(),

      notes: z.string().optional(),
      keys: z.string().optional(),
      accessCode: z.string().optional(),
      instructions: z.string().optional(),
      frequency: z.string().optional(),
    })
    .refine(
      (data) =>
        !data.checkOutDateTime ||
        !data.nextCheckinDateTime ||
        data.checkOutDateTime < data.nextCheckinDateTime,
      {
        message: "checkOutDateTime must be earlier than nextCheckinDateTime",
        path: ["checkOutDateTime"],
      }
    ),
});