import { Schema, model } from "mongoose";

interface ITechnology {
  name: string;
  icon: string;
}

export interface IProject {
  title: string;
  description: string;
  sequence: number;
  githubLink?: string;
  liveLink?: string;
  videoLink?: string;
  technologies?: ITechnology[];
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sequence: { type: Number, required: true },
  githubLink: { type: String },
  liveLink: { type: String },
  videoLink: { type: String },
  technologies: [
    {
      name: { type: String, required: true },
      icon: { type: String, required: true },
    },
  ],
});

export const Project = model<IProject>("Project", ProjectSchema);
