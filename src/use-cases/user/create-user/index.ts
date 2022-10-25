import { SendMailMailtrap } from "@infra/providers/send-email/mailtrap/send-mail-mailtrap";
import { CreateuserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";
import { BcryptEncode } from '@infra/providers/encript/bcrypt/bcrypt'
import { Validator } from '@infra/providers/validator/validator/validator'
import { ErroHttp } from '@infra/providers/exceptions/server-error'


// Data bases
// import { UserBD } from "@infra/repositories/memo-db/user/user-memo"; // Bd memo fake
// import { UserBD } from '@infra/repositories/mongoose/user/user-mongoose'
import { UserBD } from '@infra/repositories/typeorm/repositories/user/user-repository'

const dataBD = new UserBD()
const mailtrapMailProvider = new SendMailMailtrap()
const bcrypt = new BcryptEncode()
const validator = new Validator()
const erroHttp = new ErroHttp()

const createUserUseCase = new CreateUserUseCase(
  dataBD, mailtrapMailProvider, bcrypt, validator, erroHttp
)

const createUserController = new CreateuserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}