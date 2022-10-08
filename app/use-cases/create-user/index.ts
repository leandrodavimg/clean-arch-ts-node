import { SendMailMailtrap } from "../../infra/providers/mailtrap/send-mail-mailtrap";
import { PostgresFake } from "../../infra/repositories/memo-db/user";
import { CreateuserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";

const postgreFakeRepository = new PostgresFake()
const mailtrapMailProvider = new SendMailMailtrap()

const createUserUseCase = new CreateUserUseCase(
  postgreFakeRepository, mailtrapMailProvider
)

const createUserController = new CreateuserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}