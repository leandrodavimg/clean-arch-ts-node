import { User } from '@entities/user/User'
import { IValidator } from '../../../providers/validator'
import { ICreateAuthUser } from '../../../repositories/auth/create-auth-user'
import { IBcrypt } from '../../../providers/encript-provider'
import { IJwt } from '../../../providers/jwt'

export class LoginUserUseCase {
  constructor(
    private validator: IValidator,
    private createAuthUser: ICreateAuthUser,
    private encript: IBcrypt,
    private jwt: IJwt
  ) {

  }

  async execute(email: string, password: string): Promise<ILoginUserUseCase> {
    // valida se o email é valido
    if (!this.validator.email(email)) {
      throw new Error('E-mail is not valid')
    }
    // valida se a senha está preenchida
    if (this.validator.isEmpty(password)) {
      throw new Error('Password is required')
    }
    // Busca o usuário na base de dados
    const user = await this.createAuthUser.login(email)

    if (!user) {
      throw new Error('User not exists.')
    }

    // verifica se a senha está correta
    const validPassword = await this.encript.compare(password, user)
    if (!validPassword) {
      throw new Error('Password is not valid.')
    }

    // verifica se confirmou o email
    if (!user.confirmed) {
      throw new Error('User did not confirm their email.')
    }

    // verifica se o usuário está ativo
    if (!user.active) {
      throw new Error('User is not active')
    }

    // cria o token jwt
    const token = this.jwt.sign(user)

    const {password: pas, confirmed: con, active: act, ...compactUser} = user

    return {
      token: token,
      user: compactUser
    }
  }
}

interface ILoginUserUseCase {
  token: string,
  user: {
    id: string,
    name: string,
    email: string
  }
}