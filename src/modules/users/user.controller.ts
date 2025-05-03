import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async ping(req: Request, res: Response) {
    res.status(200).json({ message: "Pong" });
  }

  static async getBaseUser(req: Request, res: Response) {
    const user = await UserService.getBaseUser();
    res.status(200).json(user);
  }
}
