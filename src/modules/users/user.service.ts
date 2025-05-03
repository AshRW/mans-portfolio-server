import { IUser, User } from "./user.model";


export class UserService {
  static async getBaseUser(): Promise<IUser> {
    const [baseUser] = await User.find().lean();
    if (!baseUser) {
      throw new Error("Base user not found");
    }
    return baseUser;
  }
}
