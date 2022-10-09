import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/user-repository";
import { ICreateUserRequestDTO } from "./create-user-dto";
import { IMailProvider } from '../../providers/mail-provider'
import { IBcrypt } from "../../providers/encript-provider";
import { IValidator } from '../../providers/validator'

export class CreateUserUseCase {
  constructor(
    // note: se você usa o private você não precisa instanciar no contexto do contrutor
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,
    private encriptPass: IBcrypt,
    private validator: IValidator
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<User> {

    // valid e-mail
    if (!this.validator.email(data.email)) {
      throw new Error('E-mail is not valid.')
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    // Instancia o novo usuário
    const user = new User(data)

    // Encripta o password
    const newPassword = await this.encriptPass.hash(user.password)
    user.password = newPassword

    // Grava o usuário no banco de dados
    const userData = await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      type: 'welcome'
    })

    return userData
  }
}