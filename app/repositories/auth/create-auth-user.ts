import { User } from '../../entities/user/User'

export interface ICreateAuthUser {
  login(email: string): Promise<User>
}