import { Router } from "express";
import read from "../controllers/userAction/read.controller";
import list from "../controllers/userAction/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;