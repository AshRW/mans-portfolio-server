import { ITechnology, Technology } from "./technologies.model";

export class TechnologiesService {
  static async getAllTechs(): Promise<ITechnology[]> {
    return await Technology.find().lean();
  }
}