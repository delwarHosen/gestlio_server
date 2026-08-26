export const ACCOMMODATION_TYPE = {
  APARTMENT: "APARTMENT",
  HOUSE: "HOUSE",
  STUDIO: "STUDIO",
  VILLA: "VILLA",
  OTHER: "OTHER",
} as const;

export type AccommodationType =
  (typeof ACCOMMODATION_TYPE)[keyof typeof ACCOMMODATION_TYPE];
