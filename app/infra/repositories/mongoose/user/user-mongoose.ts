import { User } from "../../../../entities/User";
import { IUserRepository } from "../../../../repositories/user-repository";
import UserModel from './schema'

export class UserBD implements IUserRepository {
  constructor() { }
  
  async findByEmail(email: string): Promise<boolean> {
    const client = await UserModel.findOne({ email: email })
    return client ? true : false
  }

  async save(user: User): Promise<User> {
    delete user.props 
    const client = new UserModel(user) // ! nao esta gravando pq esta passando propriedades privadas aqui
    await client.save()
    return user
  }
}
