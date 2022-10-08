import { SendMailMailtrap } from "../../infra/providers/mailtrap/send-mail-mailtrap";
import { PostgresFake } from "../../infra/repositories/memo-db/user";
import { CreateuserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";
import { BcryptEncode } from '../../infra/providers/encript/bcrypt'

const postgreFakeRepository = new PostgresFake()
const mailtrapMailProvider = new SendMailMailtrap()
const bcrypt = new BcryptEncode()

const createUserUseCase = new CreateUserUseCase(
  postgreFakeRepository, mailtrapMailProvider, bcrypt
)

const createUserController = new CreateuserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}