export const ROLE = {
  ADMIN: "ADMIN",
  HOST: "HOST",
  CLEANER: "CLEANER",
} as const;

export type RoleType = (typeof ROLE)[keyof typeof ROLE];