import { HttpException } from "./HttpException"

export class ServerError extends HttpException {
  message: string
  constructor(message: string) {
    super(500, message)
    this.message = message
  }
}