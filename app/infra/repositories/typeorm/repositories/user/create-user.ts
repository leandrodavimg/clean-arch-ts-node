import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../config/connection/typeorm";
import { User as IUser } from "../../../../../entities/user/User";
import { IUserRepository } from "../../../../../repositories/user-repository";
import { User } from "../../entities/User";

const teste = AppDataSource.getRepository(User)

export class UserBD implements IUserRepository {
  private repository: Repository<User>
  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  async save(user: IUser): Promise<IUser> {
    const createUser = this.repository.create(user)
    await this.repository.save(createUser)
    return createUser
  }

  async findByEmail(emial: string): Promise<boolean> {
      return false
  }
}