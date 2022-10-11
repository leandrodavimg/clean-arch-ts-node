import { User, IUserPros } from "../../../../entities/User";
import { IUserRepository } from "../../../../repositories/user-repository";

export class UserBD implements IUserRepository {

  private users: IUserPros[] = []

  async findByEmail(email: string): Promise<boolean> {
    const user = this.users.find(user => user.email === email)
    return user ? true : false
  }

  async save(user: IUserPros): Promise<IUserPros> {
    this.users.push(user)
    user.name = `${user.name} teste`
    return user
  }
}