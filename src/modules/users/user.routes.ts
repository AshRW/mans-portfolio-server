import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/ping", UserController.ping);
router.get("/base-user", UserController.getBaseUser);

export default router;
