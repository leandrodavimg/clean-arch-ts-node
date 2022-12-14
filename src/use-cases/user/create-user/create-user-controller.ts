import { Response, Request } from "express";
import { CreateUserUseCase } from "./create-user-use-case";

export class CreateuserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const user = await this.createUserUseCase.execute({
        name, email, password
      })

      return response.status(201).send(user)
    } catch (err) {
      return response.status(err.status || 500).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}