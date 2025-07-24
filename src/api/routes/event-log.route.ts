import { Router } from "express";
import read from "../controllers/eventLog/read.controller";
import list from "../controllers/eventLog/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;