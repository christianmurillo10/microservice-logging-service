import { Router } from "express";
import read from "../controllers/eventLogs/read.controller";
import list from "../controllers/eventLogs/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;