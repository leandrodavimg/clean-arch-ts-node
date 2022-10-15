import { Request, Response, Router } from "express";
import { createUserController } from "../use-cases/create-user";
import { loginUserController } from "../use-cases/auth-user/login"
import { showmeController } from '../use-cases/showme'

import { authMiddleware } from '../middleware/auth'

const router = Router()

router.post('/api/users', (req: Request, res: Response) => {
  return createUserController.handle(req, res)
})

router.post('/api/login', (req: Request, res: Response) => {
  return loginUserController.handle(req, res)
})

router.use(authMiddleware)
router.get('/api/user/me', (req: Request, res: Response) => {
  return showmeController.handle(req, res)
})

export { router }