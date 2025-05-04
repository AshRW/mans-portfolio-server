import { Request, Response } from "express";
import { TechnologiesService } from "./technologies.service";

export class TechnologiesController {
  static async ping(req: Request, res: Response) {
    res.status(200).json({ message: "Pong" });
  }

  static async getAllTechs(req: Request, res: Response) {
    const techs = await TechnologiesService.getAllTechs();
    res.status(200).json(techs);
  }
}
