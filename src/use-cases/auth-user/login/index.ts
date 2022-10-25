import { LoginUserUseCase } from "./login-user-use-case";
import { LoginUserController } from "./login-user-controller";

import { Validator } from '@infra/providers/validator/validator/validator'
import { LoginAuthRepository } from '../../../infra/repositories/typeorm/repositories/auth/login-auth-repository'
import { BcryptEncode } from '../../../infra/providers/encript/bcrypt/bcrypt'
import { CreateJwt } from "@infra/providers/security/jwt";

const validator = new Validator()
const loginAuthRepository = new LoginAuthRepository()
const bcrypt = new BcryptEncode()
const jwt = new CreateJwt()

const loginUserUseCase = new LoginUserUseCase(validator, loginAuthRepository, bcrypt, jwt)

const loginUserController = new LoginUserController(loginUserUseCase)

export {loginUserUseCase, loginUserController}