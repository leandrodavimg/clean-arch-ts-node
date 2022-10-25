import { v4 as uuid } from 'uuid'
export class User {
  public readonly id: string
  public name: string
  public email: string
  public password: string
  public confirmed?: boolean
  public active?: boolean

  constructor(props: Omit<User, 'id'>, id?: string) {

    this.name = props.name
    this.email = props.email
    this.password = props.password
    
    if (!id) {
      this.id = uuid()
    }
  }
}