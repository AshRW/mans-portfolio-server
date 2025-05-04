import { Schema, Types, model } from "mongoose";

export interface ISocialMediaLink {
  platform: string;
  url: string;
}

export interface ISkill {
  type: string;
  list: [];
}

export interface IUser {
  name: string;
  location: string;
  experience: string;
  education: string;
  socialMediaLinks: ISocialMediaLink[];
  skills: ISkill[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  socialMediaLinks: [
    {
      platform: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  skills: [
    {
      type: { type: String, required: true },
      list: [{ type: Types.ObjectId, ref: "Technology" }],
    },
  ],
});

export const User = model<IUser>("User", UserSchema);
