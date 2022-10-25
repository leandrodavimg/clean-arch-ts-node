import { HttpException } from "./HttpException"

export class Conflict extends HttpException {
  message: string
  constructor(message: string) {
    super(409, message)
    this.message = message
  }
}