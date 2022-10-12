// interface Props {
//   user: string,
//   key: string,

// }
import { IUserPros } from "../entities/user/User"

export interface IJwt {
  sign(user: IUserPros): string
  verify(token: string): any
}