import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import {
  list as listValidation
} from "../../middlewares/validators/event-log.validator";
import * as EventLogController from "../controllers/";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  // authorize("list", "event-log"),
  listValidation,
  EventLogController.list
);

router.get(
  "/:id",
  // authorize("read", "event-log"),
  authenticate,
  EventLogController.read
);

export default router;