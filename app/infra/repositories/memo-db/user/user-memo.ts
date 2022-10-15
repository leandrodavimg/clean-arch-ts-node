import { User } from "../../../../entities/user/User";
import { IUserRepository } from "../../../../repositories/user-repository";

export class UserBD implements IUserRepository {

  private users: User[] = []

  async findByEmail(email: string): Promise<boolean> {
    const user = this.users.find(user => user.email === email)
    return user ? true : false
  }

  async save(user: User): Promise<User> {
    this.users.push(user)
    user.name = `${user.name} teste`
    return user
  }
}