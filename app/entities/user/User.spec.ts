import { expect, test, vi } from 'vitest'

// working my test
import { User } from './User'
import { Validator } from '../../infra/providers/validator/validator'

test('Should cannot create user without email or with invalid emaila', () => {
  const user = {
    name: 'Name User',
    email: 'invalid-email',
    password: '123123'
  }

  const validator = new Validator()

  expect(() => { return new User(user, validator) }).toThrow('E-mail is not valid')
})

test('Should cannot create user without name', () => {
  const user = {
    name: '',
    email: 'emailvalid@email.com',
    password: '123123'
  }

  const validator = new Validator()

  expect(() => { return new User(user, validator) }).toThrow('Name is not valid')
})

test('Should cannot create user whitout password', () => {
  const user = {
    name: 'Name user',
    email: 'emailvalid@email.com',
    password: ''
  }

  const validator = new Validator()

  expect(() => { return new User(user, validator) }).toThrow('Password is required')
})

