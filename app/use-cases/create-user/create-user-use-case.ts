import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/user-repository";
import { ICreateUserRequestDTO } from "./create-user-dto";
import { IMailProvider } from '../../providers/mail-provider'

export class CreateUserUseCase {
  constructor(
    // note: se você usa o private você não precisa instanciar no contexto do contrutor
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    // Encripta o password

    // Instancia o novo usuário
    const user = new User(data)

    // Grava o usuário no banco de dados
    const userData = await this.usersRepository.save(user)

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: data.name,
    //     email: data.email
    //   },
    //   from: {
    //     name: 'Leandro',
    //     email: 'leandrodavimg@gmail.com'
    //   },
    //   subject: 'Teste de titulo',
    //   html: '<p>Isso é um teste de mensagem para enviar e-mail</p>'
    // })
    return userData
  }
}