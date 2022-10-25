import { IHttpException } from "@providers/exception/contract-httpexception"
import { BadRequest } from "./BadRequest"
import { HttpException } from "./HttpException"
import { ServerError } from "./ServerError"
import { Unauthorized } from './Unauthorized'

export class ErroHttp implements IHttpException {

  constructor() {}

  BadRequest (message: string): HttpException {
    throw new BadRequest(message)
  }
  Unauthorized(message: string): HttpException {
    throw new Unauthorized(message)
  }

  ServerError (message: string): HttpException {
    throw new ServerError(message)
  }

}