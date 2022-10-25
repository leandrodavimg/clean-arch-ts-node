import { Request, Response, NextFunction } from 'express'
import { CreateJwt } from '../../infra/providers/security/jwt'
import { UserBD } from '../../infra/repositories/typeorm/repositories/user/create-user'
import { UserAuthMiddleware } from './auth-use-case'

const jwt = new CreateJwt()
const userBD = new UserBD()

const userAuthMiddleware = new UserAuthMiddleware(
  jwt, userBD
)

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  userAuthMiddleware.execute(req, res, next)
}