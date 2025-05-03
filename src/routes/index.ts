import { Router } from "express";
import userRoutes from "../modules/users/user.routes";
import projectRoutes from "../modules/projects/project.routes";
// import experienceRoutes from "../modules/experience/experience.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/projects", projectRoutes);
// router.use("/experience", experienceRoutes);

export default router;
