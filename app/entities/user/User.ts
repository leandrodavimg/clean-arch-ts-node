import { v4 as uuid } from 'uuid'
import { IValidator } from '../../providers/validator'

// export class User {
//   public readonly id: string

//   public name: string
//   public email: string
//   public password: string

//   constructor(props: Omit<User, 'id'>, private validator: IValidator, id?: string) {
//     if (!this.validator.email(props.email)) {
//       throw new Error('E-mail is not valid.')
//     }
//     delete this.validator // remove validator object from props

//     this.name = props.name
//     this.email = props.email
//     this.password = props.password
//     // Object.assign(this, props) // Não gosto desse modelo pq não deixa claro
//     if (!id) {
//       this.id = uuid()
//     }
//   }
// }
export interface IUserPros {
  id?: string
  name: string
  email: string
  password: string
}

export class User {
  props: IUserPros
  get id() { return this.props.id }
  get name() { return this.props.name }
  get email() { return this.props.email }
  get password() { return this.props.password }
  set password(value: string) { this.props.password = value }

  constructor(props: IUserPros, private validator: IValidator, id?: string) {
    if (props.name === '') {
      throw new Error('Name is not valid')
    }
    
    // 1 - Validate the email - How is a validation that only depends on itself (can be done here)
    if (!this.validator.email(props.email)) {
      throw new Error('E-mail is not valid')
    }
    delete this.validator // remove validator object from props

    if (!id) {
      props.id = uuid()
    }

    this.props = props
  }
}