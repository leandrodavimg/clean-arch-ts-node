import { User } from "../../entities/user/User";
import { IUserRepository } from "../../repositories/user-repository";
import { ICreateUserRequestDTO } from "./create-user-dto";
import { IMailProvider } from '../../providers/mail-provider'
import { IBcrypt } from "../../providers/encript-provider";
import { IValidator } from '../../providers/validator'
import { IHttpException } from "../../providers/HttpException/contract-httpexception"



export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,
    private encriptPass: IBcrypt,
    private validator: IValidator,
    private HttpErro: IHttpException
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<User | any> {

    if (data === null) {
      this.HttpErro.BadRequest('No data found.')
    }

    if (!this.validator.email(data.email)) {
       this.HttpErro.BadRequest('E-mail is not valid')
    }

    if (this.validator.isEmpty(data.name)) {
      this.HttpErro.BadRequest('Name is not valid')
    }

    if (this.validator.isEmpty(data.password)) {
       this.HttpErro.BadRequest('Password is required')
    }

    const user = new User(data)

    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)

    if (userAlreadyExists) {
      this.HttpErro.BadRequest('User already exists.')
    }

    const newPassword = await this.encriptPass.hash(user.password)
    user.password = newPassword 

    const {password: _, ...nUser} = await this.usersRepository.save(user)

    // ! Create use-case to send email 
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