import { HttpException } from "@infra/providers/exceptions/HttpException";

export interface IHttpException {
  BadRequest: (message: string) => HttpException
  Unauthorized: (message: string) => HttpException
  ServerError: (message: string) => HttpException
}