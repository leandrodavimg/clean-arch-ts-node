import { Request, Response, NextFunction } from 'express'
import { IJwt } from '../../providers/security/jwt'
import { IUserRepository } from '../../repositories/user/user-repository'

export class UserAuthMiddleware {

  constructor(
    private jwt: IJwt,
    private userRepository: IUserRepository
  ) {
  }

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers

    if (!authorization) {
      res.status(400).json({ message: 'Not authorized' })
      return; //! That's not the best solution.
    }

    const token = authorization.split(' ')[1]

    const myToken = this.jwt.verify(token)
    if (!myToken) {
      res.status(400).json({ message: '42: Unexpected error.' })
      return; //! That's not the best solution.
    }

    const { id } = myToken
    const user = await this.userRepository.findById(id)
    if (!user.active) {
      res.status(400).json({ message: '42: Unexpected error.' })
      return; //! That's not the best solution.
    }
    const {password: _, ...userPayload} = user
    req.user = userPayload
    

    

    next()

  }
}