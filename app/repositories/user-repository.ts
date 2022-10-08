import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<boolean>
  save(user: User): Promise<User>
}