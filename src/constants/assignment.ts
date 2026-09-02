export const ASSIGNMENT_ROLE = {
  PRIMARY: "PRIMARY",
  SUBSTITUTE: "SUBSTITUTE",
} as const;

export type AssignmentRoleType = (typeof ASSIGNMENT_ROLE)[keyof typeof ASSIGNMENT_ROLE];

export const ASSIGNMENT_STATUS = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REFUSED: "REFUSED",
  COMPLETED: "COMPLETED",   
} as const;

export type AssignmentStatusType =
  (typeof ASSIGNMENT_STATUS)[keyof typeof ASSIGNMENT_STATUS];