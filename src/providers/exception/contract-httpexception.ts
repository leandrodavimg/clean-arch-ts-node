import { HttpException } from "@infra/providers/exceptions/server-error/HttpException";

export interface IHttpException {
  BadRequest: (message: string) => HttpException
  Unauthorized: (message: string) => HttpException
  ServerError: (message: string) => HttpException
}