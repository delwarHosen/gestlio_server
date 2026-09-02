import { Router } from "express";
import * as assignmentController from "./assignment.controller";
import * as cleanerController from "../cleaner/cleaner.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import { ROLE } from "../../constants/role";
import { getCleanersSchema, cleanerIdParamSchema } from "../cleaner/cleaner.validation";
import {
  assignCleanerSchema,
  accommodationIdParamSchema,
  changeCleanerRoleSchema,
  assignmentIdParamSchema,
  respondToRequestSchema,
  completeAssignmentParamSchema,
} from "./assignment.validation";

const router = Router();

// ---------- Host: browse cleaners before assigning (reuses the cleaner module) ----------
router.get(
  "/find-housekeepers",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(getCleanersSchema),
  cleanerController.getCleaners
);

router.get(
  "/cleaner-profile/:id",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(cleanerIdParamSchema),
  cleanerController.getCleanerById
);

// ---------- Host: manage assignments ----------
router.post(
  "/:accommodationId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(assignCleanerSchema),
  assignmentController.assignCleaner
);

router.get(
  "/:accommodationId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(accommodationIdParamSchema),
  assignmentController.getAssignedCleaners
);

router.patch(
  "/:assignmentId/role",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(changeCleanerRoleSchema),
  assignmentController.changeCleanerRole
);

router.delete(
  "/:assignmentId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(assignmentIdParamSchema),
  assignmentController.removeCleaner
);

// ---------- Cleaner: respond to invitations ----------
router.get(
  "/cleaner/my-requests",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  assignmentController.getMyRequests
);

router.patch(
  "/cleaner/:assignmentId/respond",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  validate(respondToRequestSchema),
  assignmentController.respondToRequest
);

router.get(
  "/cleaner/my-accommodations",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  assignmentController.getMyAcceptedAccommodations
);


router.patch(
  "/:assignmentId/complete",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(completeAssignmentParamSchema),
  assignmentController.completeAssignment
);
export default router;