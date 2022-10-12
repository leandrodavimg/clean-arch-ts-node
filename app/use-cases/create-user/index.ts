import { SendMailMailtrap } from "../../infra/providers/mailtrap/send-mail-mailtrap";
import { CreateuserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";
import { BcryptEncode } from '../../infra/providers/encript/bcrypt'
import { Validator } from '../../infra/providers/validator/validator'
import { CreateJwt } from "../../infra/providers/security/jwt";

// Data bases
// import { UserBD } from "../../infra/repositories/memo-db/user/user-memo"; // Bd memo fake
import { UserBD } from '../../infra/repositories/mongoose/user/user-mongoose'

const dataBD = new UserBD()
const mailtrapMailProvider = new SendMailMailtrap()
const bcrypt = new BcryptEncode()
const validator = new Validator()
const jwt = new CreateJwt()

const createUserUseCase = new CreateUserUseCase(
  dataBD, mailtrapMailProvider, bcrypt, validator, jwt
)

const createUserController = new CreateuserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}