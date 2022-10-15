import { User } from "../entities/user/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<User>
  findById(id: string): Promise<User>
  save(user: User): Promise<User>
}