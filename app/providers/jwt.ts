// interface Props {
//   user: string,
//   key: string,

// }
import { User } from "../entities/user/User"

export interface IJwt {
  sign(user: User): string
  verify(token: string): any
}