import { IUserPros, User } from "../../entities/User";
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

  async execute(data: ICreateUserRequestDTO): Promise<IUserPros> {

    // (x) instance the new user
    // (x) validates if the email is email
    // ! () here already applies the TDD
    const user = new User(data, this.validator)

    // validates if the email is registered
    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    // Encripta o password
    const newPassword = await this.encriptPass.hash(user.password)
    user.password = newPassword // como estou alterando o valor tive que colocar o set na class

    // Grava o usuário no banco de dados
    const userData = await this.usersRepository.save(user.props)

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