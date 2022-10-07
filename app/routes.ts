import { Request, Response, Router } from "express";
import { createUserController } from "./use-cases/create-user";

const router = Router()

router.post('/users', (res: Response, req: Request) => {
  return createUserController.handle(req, res)
})

export { router }