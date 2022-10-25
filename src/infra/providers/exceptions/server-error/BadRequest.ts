import { HttpException } from "./HttpException"

export class BadRequest extends HttpException {
  message: string
  constructor(message: string) {
    super(400, message)
    this.message = message
  }
}