import { User, IUserPros } from "../entities/User";

export interface IUserRepository {
  findByEmail(emial: string): Promise<boolean>
  save(user: IUserPros): Promise<IUserPros>
}