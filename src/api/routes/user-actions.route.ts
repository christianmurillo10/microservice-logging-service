import { Router } from "express";
import read from "../controllers/userActions/read.controller";
import list from "../controllers/userActions/list.controller";

const router = Router();
router.use(read);
router.use(list);

export default router;