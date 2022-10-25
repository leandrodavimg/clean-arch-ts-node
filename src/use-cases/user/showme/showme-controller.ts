import { User } from "@entities/user/User"
import { Response, Request } from "express"
import { ShowMeUseCase } from './showme-use-case'

export class ShowMeController {
  constructor(
    private showMeUseCase: ShowMeUseCase
  ) { }
  
  async handle(request: Request, response: Response): Promise<Response>{
    const user: Partial<User> = request.user
    const respo = await this.showMeUseCase.execute(user)
    return response.send(respo)
  } 
}