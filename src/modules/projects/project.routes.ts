import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

router.get("/ping", ProjectController.ping);
router.get("/", ProjectController.getAllProjects);

export default router;