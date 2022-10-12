import jwt from 'jsonwebtoken'
import { IUserPros } from '../../../entities/user/User'
import { IJwt } from '../../../providers/jwt'

export class CreateJwt implements IJwt {
  sign(user: IUserPros): string {
    const token = jwt.sign(user, process.env.KEY, {expiresIn: '60m'}) 
    return token
  }

  verify(token: string) {
    const payload = jwt.verify(token, process.env.KEY)
    return payload
  }
}