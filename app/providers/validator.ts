export interface IValidator {
  email(email: string): boolean
  isEmpty(value: string): boolean
}