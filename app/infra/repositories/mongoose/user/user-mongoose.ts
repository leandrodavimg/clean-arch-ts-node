import { User } from "../../../../entities/user/User";
import { IUserRepository } from "../../../../repositories/user-repository";
import UserModel from './schema'

export class UserBD implements IUserRepository {
  constructor() { }
  
  async findByEmail(email: string): Promise<boolean> {
    const client = await UserModel.findOne({ email: email })
    return client ? true : false
  }

  async save(user: User): Promise<User> {
    console.log(user)
    const client = new UserModel(user)
    await client.save()
    return user
  }
}
