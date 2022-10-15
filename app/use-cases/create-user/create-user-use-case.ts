import { User } from "../../entities/user/User";
import { IUserRepository } from "../../repositories/user-repository";
import { ICreateUserRequestDTO } from "./create-user-dto";
import { IMailProvider } from '../../providers/mail-provider'
import { IBcrypt } from "../../providers/encript-provider";
import { IValidator } from '../../providers/validator'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,
    private encriptPass: IBcrypt,
    private validator: IValidator
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<User | any> {

    if (data === null) {
      throw new Error('No data found.')
    }

    if (!this.validator.email(data.email)) {
       throw new Error('E-mail is not valid')
    }

    if (this.validator.isEmpty(data.name)) {
      throw new Error('Name is not valid')
    }

    if (this.validator.isEmpty(data.password)) {
       throw new Error('Password is required')
    }

    const user = new User(data)

    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const newPassword = await this.encriptPass.hash(user.password)
    user.password = newPassword 

    const {password: _, ...nUser} = await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      type: 'welcome'
    })

    return nUser
  }
}