import { model, Schema } from "mongoose";

export interface ITechnology {
  name: string;
  icon: string;
}

const TechnologySchema = new Schema<ITechnology>(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
);

export const Technology = model<ITechnology>("Technology", TechnologySchema);
