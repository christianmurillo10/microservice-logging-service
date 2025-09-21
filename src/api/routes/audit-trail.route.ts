import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import authorize from "../../middlewares/authoriza.middleware";
import { validateQuery } from "../../middlewares/validate.middleware";
import { listSchema } from "../../validations/audit-trail.schema";
import * as AuditTrailController from "../controllers/auditTrail";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  authorize("list", "audit-trail"),
  validateQuery(listSchema),
  AuditTrailController.list
);

router.get(
  "/:id",
  authorize("read", "audit-trail"),
  authenticate,
  AuditTrailController.read
);

export default router;