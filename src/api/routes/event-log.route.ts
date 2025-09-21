import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import authorize from "../../middlewares/authoriza.middleware";
import { validateQuery } from "../../middlewares/validate.middleware";
import { listSchema } from "../../validations/user-action.schema";
import * as EventLogController from "../controllers/eventLog";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  authorize("list", "event-log"),
  validateQuery(listSchema),
  EventLogController.list
);

router.get(
  "/:id",
  authorize("read", "event-log"),
  authenticate,
  EventLogController.read
);

export default router;