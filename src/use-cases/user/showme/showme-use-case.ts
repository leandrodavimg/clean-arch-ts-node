import { User } from "@entities/user/User";

export class ShowMeUseCase {
  constructor() {

  }

  async execute(user: Partial<User>): Promise<Partial<User>> {
    return user
  }
}