import { Router } from "express";
import { TechnologiesController } from "./technologies.controller";

const router = Router();

router.get("/ping", TechnologiesController.ping);
router.get("/", TechnologiesController.getAllTechs);

export default router;
