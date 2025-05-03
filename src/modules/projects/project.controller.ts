import { Request, Response } from "express";
import { ProjectService } from "./project.service";

export class ProjectController {
  static ping(req: Request, res: Response) {
    res.status(200).json({ message: "pong" });
  }

  static async getAllProjects(req: Request, res: Response) {
    const projects = await ProjectService.getAllProjects();
    res.status(200).json(projects);
  }
}
