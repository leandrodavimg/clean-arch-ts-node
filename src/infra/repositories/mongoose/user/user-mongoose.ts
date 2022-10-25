import { User } from "@entities/user/User";
import { IUserRepository } from "../../../../repositories/user/user-repository";
import UserModel from './schema'

export class UserBD implements IUserRepository {
  constructor() { }
  
  
  async findByEmail(email: string): Promise<User> {
    const client: User = await UserModel.findOne({ email: email })
    return client
  }

  async save(user: User): Promise<User> {
    const client = new UserModel(user)
    await client.save()
    return user
  }

  // I'm using postgres
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
