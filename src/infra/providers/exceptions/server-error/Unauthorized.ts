import { HttpException } from "./HttpException"

export class Unauthorized extends HttpException {
  message: string
  constructor(message: string) {
    super(401, message)
    this.message = message
  }
}