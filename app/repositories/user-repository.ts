import { User, IUserPros } from "../entities/user/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<boolean>
  save(user: IUserPros): Promise<IUserPros>
}