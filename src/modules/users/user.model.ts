import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  linkedIn: string;
  github: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  linkedIn: String,
  github: String,
});

export const User = model<IUser>("User", UserSchema);
