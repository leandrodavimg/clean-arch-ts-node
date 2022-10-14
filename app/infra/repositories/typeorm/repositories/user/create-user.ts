import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../config/connection/typeorm";
import { IUserPros } from "../../../../../entities/user/User";
import { IUserRepository } from "../../../../../repositories/user-repository";
import { User } from "../../entities/User";

const teste = AppDataSource.getRepository(User)

export class UserBD implements IUserRepository {
  private repository: Repository<User>
  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  async save(user: IUserPros): Promise<IUserPros> {
    const newUser: User = {
      name: user.name,
      id: user.id,
      email: user.email,
      password: user.password
    }
    const createUser = this.repository.create(newUser)
    await this.repository.save(createUser)
    return createUser
  }

  async findByEmail(emial: string): Promise<boolean> {
      return false
  }
}