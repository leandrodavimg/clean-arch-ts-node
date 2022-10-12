import { describe, expect, test, vi } from 'vitest'

import { CreateUserUseCase } from "./create-user-use-case";
import { SendMailMailtrap } from "../../infra/providers/mailtrap/send-mail-mailtrap";
import { CreateuserController } from "./create-user-controller";
import { BcryptEncode } from '../../infra/providers/encript/bcrypt'
import { Validator } from '../../infra/providers/validator/validator'
import { UserBD } from "../../infra/repositories/memo-db/user/user-memo";

const dataBD = new UserBD()
const mailtrapMailProvider = new SendMailMailtrap()
const bcrypt = new BcryptEncode()
const validator = new Validator()
const createUserUseCase = new CreateUserUseCase(dataBD, mailtrapMailProvider, bcrypt, validator)

describe('Create User case', () => {
  test('Should return erro 500 if the user object is not passed', () => {

    // const user = null
    const user = {
    name: 'Leandro Freitas',
    email: 'invalidemail.com',
    password: '123123'
  }

    const createUser = createUserUseCase.execute(user)

    expect(createUser).toThrow('No data found.')
  })
})