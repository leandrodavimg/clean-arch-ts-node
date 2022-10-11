import { User } from "../entities/user/User"

export interface IBcrypt {
  hash(password: string): Promise<string>
  compare(password: string, user: User): Promise<boolean>
}