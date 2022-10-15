import { Request, Response, NextFunction } from 'express'
import { IJwt } from '../../providers/jwt'
import { IUserRepository } from '../../repositories/user-repository'

export class UserAuthMiddleware {

  constructor(
    private jwt: IJwt,
    private userRepository: IUserRepository
  ) {
  }

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers

    if (!authorization) {
      throw new Error('Not authorized')
    }

    const token = authorization.split(' ')[1]

    const { id } = this.jwt.verify(token)

    const user = await this.userRepository.findById(id)

    if (!user.active) {
      throw new Error('User is not active')
    }

    const {password: _, ...userPayload} = user

    req.user = userPayload

    next()

  }
}