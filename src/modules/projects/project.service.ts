import { IProject, Project } from "./project.model";

export class ProjectService {
  static async getAllProjects(): Promise<IProject[]> {
    return await Project.find()
  }
}