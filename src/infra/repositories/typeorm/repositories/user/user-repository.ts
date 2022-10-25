import { Repository } from "typeorm";
import { AppDataSource } from "@config/connection/typeorm";
import { User as IUser } from "@entities/user/User";
import { IUserRepository } from "@repositories/user/user-repository";
import { User } from "../../entities/User";
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

  async findByEmail(emial: string): Promise<IUser> {
      const user = await this.repository.findOneBy({email: emial})
      return user
  }

  async findById(id: string): Promise<IUser> {
      const user = await this.repository.findOneBy({ id: id })
      return user
  }
}