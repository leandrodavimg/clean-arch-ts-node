import validator from 'validator'
import { IValidator } from '../../../providers/validator';

export class Validator implements IValidator {

  email(email: string): boolean {
    const emailValid = validator.isEmail(email)
    return emailValid
  }

  isEmpty(value: string): boolean {
      return validator.isEmpty(value)
  }

}