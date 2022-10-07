import { Request, Response, Router } from "express";
import { createUserController } from "./use-cases/create-user";

const router = Router()

router.post('/users', (req: Request, res: Response) => {
  // return res.send(req.body)
  return createUserController.handle(req, res)
})

export { router }