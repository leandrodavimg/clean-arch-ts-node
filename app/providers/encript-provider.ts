import { User } from "../entities/user/User"

export interface IBcrypt {
  hash(password: string): string
  compare(password: string, user: User): Promise<boolean>
}