import { IUser, User } from "./user.model";


export class UserService {
  static async getBaseUser(): Promise<IUser> {
    const [baseUser] = await User.find().populate("skills.list").exec();
    if (!baseUser) {
      throw new Error("Base user not found");
    }
    return baseUser;
  }
}
