import { User } from "../entities/user/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<boolean>
  save(user: User): Promise<User>
}