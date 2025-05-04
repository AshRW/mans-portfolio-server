import { Schema, Types, model } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  sequence: number;
  githubLink?: string;
  liveLink?: string;
  videoLink?: string;
  technologies?: [];
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sequence: { type: Number, required: true },
  githubLink: { type: String },
  liveLink: { type: String },
  videoLink: { type: String },
  technologies: [{ type: Types.ObjectId, ref: "Technology" }],
});

export const Project = model<IProject>("Project", ProjectSchema);
