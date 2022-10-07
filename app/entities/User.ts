import { uuid } from 'uuidv4'

export class User {
  public readonly id: string

  public name: string
  public email: string
  public password: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.name = props.name
    this.email = props.email
    this.password = props.password
    // Object.assign(this, props) // Não gosto desse modelo pq não deixa claro
    if (!id) {
      this.id = uuid()
    }
  }
}