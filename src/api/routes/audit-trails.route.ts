import { Router } from "express";
import read from "../controllers/auditTrails/read.controller";
import list from "../controllers/auditTrails/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;