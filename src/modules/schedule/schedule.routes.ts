import { Router } from "express";
import * as scheduleController from "./schedule.controller";
import {  validate } from "../../middlewares/validate.middleware";
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import { ROLE } from "../../constants/role";
import {
  createScheduleSchema,
  scheduleIdParamSchema,
  editScheduleSchema,
  respondToScheduleSchema,
  submitProofSchema,
  invalidateScheduleSchema,
  reportDisputeSchema,
} from "./schedule.validation";
import { uploadScheduleProofPhotos } from "../../middlewares/upload.middleware";

const router = Router();

// ---------- Host ----------
router.get(
  "/host/my-schedules",
  authenticate,
  authorizeRoles(ROLE.HOST),
  scheduleController.getHostSchedules
);

router.post(
  "/host/:accommodationId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(createScheduleSchema),
  scheduleController.createSchedule
);

router.patch(
  "/host/:scheduleId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(editScheduleSchema),
  scheduleController.editSchedule
);

router.delete(
  "/host/:scheduleId",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(scheduleIdParamSchema),
  scheduleController.deleteSchedule
);

router.patch(
  "/host/:scheduleId/invalidate",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(invalidateScheduleSchema),
  scheduleController.invalidateTask
);

router.patch(
  "/host/:scheduleId/complete",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(scheduleIdParamSchema),
  scheduleController.completeTask
);

// ---------- Cleaner ----------
router.get(
  "/cleaner/my-schedules",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  scheduleController.getCleanerSchedules
);

router.patch(
  "/cleaner/:scheduleId/respond",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  validate(respondToScheduleSchema),
  scheduleController.respondToSchedule
);

router.patch(
  "/cleaner/:scheduleId/proof",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  uploadScheduleProofPhotos.array("proofPhotos", 10),
  validate(submitProofSchema),
  scheduleController.submitProof
);

router.patch(
  "/cleaner/:scheduleId/dispute",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  validate(reportDisputeSchema),
  scheduleController.reportDispute
);

// ---------- Shared (host or cleaner) ----------
router.get(
  "/:scheduleId",
  authenticate,
  validate(scheduleIdParamSchema),
  scheduleController.getScheduleById
);

export default router;