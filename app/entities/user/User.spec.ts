import { expect, test, vi } from 'vitest'

// working my test
import { User } from './User'
import { Validator } from '../../infra/providers/validator/validator'

test('Should cannot create user without email or with invalid emaila', () => {
  const user = {
    name: 'Leandro Freitas',
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

// test('Should cannat teste get and set', () => {
//   const validator = new Validator()
//   const user = new User({
//     name: 'Leandro Freitas',
//     email: 'emailvalid@email.com',
//     password: '123123'
//   }, validator)


//   const spy = vi.spyOn(user, )
  
// })
