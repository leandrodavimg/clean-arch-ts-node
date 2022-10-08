import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<User>
  save(user: User): Promise<User>
}