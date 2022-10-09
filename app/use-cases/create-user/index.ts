import { SendMailMailtrap } from "../../infra/providers/mailtrap/send-mail-mailtrap";
import { CreateuserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";
import { BcryptEncode } from '../../infra/providers/encript/bcrypt'
import { Validator } from '../../infra/providers/validator/validator'

// import { UserBD } from "../../infra/repositories/memo-db/user/user-db"; // Bd memo fake
import { UserBD } from '../../infra/repositories/mongoose/user/user-mongoose'

const postgreFakeRepository = new UserBD()
const mailtrapMailProvider = new SendMailMailtrap()
const bcrypt = new BcryptEncode()
const validator = new Validator()

const createUserUseCase = new CreateUserUseCase(
  postgreFakeRepository, mailtrapMailProvider, bcrypt, validator
)

const createUserController = new CreateuserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}