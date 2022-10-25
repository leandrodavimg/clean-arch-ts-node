import { Repository } from "typeorm";
import { AppDataSource } from "@config/connection/typeorm";
import { User as IUser } from '@entities/user/User';
import { ICreateAuthUser } from '@repositories/auth/create-auth-user'
import { User } from "../../entities/User";

export class LoginAuthRepository implements ICreateAuthUser {
  private repository: Repository<IUser>
  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  
  async login(email: string): Promise<IUser> {
    const user = await this.repository.findOneBy({ email })
    return user
  }

}