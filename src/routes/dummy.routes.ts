import { Router } from "express";
import { DummyController } from "../controllers/dummy.controller";

const router = Router();
const controller = new DummyController();

router.get("/", controller.getMessage);

export default router;
