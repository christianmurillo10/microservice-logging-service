import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import {
  list as listValidation
} from "../../middlewares/validators/audit-trail.validator";
import * as AuditTrailController from "../controllers/auditTrail";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  // authorize("list", "audit-trail"),
  listValidation,
  AuditTrailController.list
);

router.get(
  "/:id",
  // authorize("read", "audit-trail"),
  authenticate,
  AuditTrailController.read
);

export default router;