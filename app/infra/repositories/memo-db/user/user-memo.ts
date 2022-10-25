import { User as IUser } from "@entities/user/User";
import { IUserRepository } from "../../../../repositories/user-repository";

export class UserBD implements IUserRepository {
  

  private users: IUser[] = []

  async findByEmail(email: string): Promise<IUser> {
    const user = this.users.find(user => user.email === email)
    return user
  }

  async save(user: IUser): Promise<IUser> {
    this.users.push(user)
    user.name = `${user.name} teste`
    return user
  }

  findById(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
}