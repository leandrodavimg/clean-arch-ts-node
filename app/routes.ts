import { Request, Response, Router } from "express";

const router = Router()

router.post('/users', (res: Response, req: Request) => {
  return res.status(200).send('Welcome in my app')
})

export { router }