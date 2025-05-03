import { Request, Response } from "express";
import { DummyService } from "../services/dummy.service";

export class DummyController {
  private service: DummyService;

  constructor() {
    this.service = new DummyService();
  }

  getMessage = (req: Request, res: Response): void => {
    const message = this.service.getDummyMessage();
    res.json({ message });
  };
}
