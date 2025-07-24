import { Router } from "express";
import read from "../controllers/auditTrail/read.controller";
import list from "../controllers/auditTrail/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;