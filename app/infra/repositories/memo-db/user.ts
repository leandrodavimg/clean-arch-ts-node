import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/user-repository";

export class PostgresFake implements IUserRepository {

  private users: User[] = []

  async findByEmail(emial: string): Promise<User> {
    const user = this.users.find(user => user.email)
    
    return user
  }

  async save(user: User): Promise<User> {
    this.users.push(user)
    user.name = `${user.name} teste`
    return user
  }
}