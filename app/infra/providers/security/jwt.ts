import jwt from 'jsonwebtoken'
import { User } from '../../../entities/user/User'
import { IJwt } from '../../../providers/jwt'

export class CreateJwt implements IJwt {
  sign(user: User): string {
    const token = jwt.sign({id: user.id}, process.env.KEY, {expiresIn: '12h'}) 
    return token
  }

  verify(token: string) {
    try {
      const payload = jwt.verify(token, process.env.KEY)
      return payload
    } catch {
      return null
    }
  }
}