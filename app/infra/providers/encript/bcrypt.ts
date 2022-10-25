import { IBcrypt } from "@providers/encript-provider";
import bcrypt from 'bcrypt'
import { User } from "@entities/user/User";

export class BcryptEncode implements IBcrypt {
  constructor() {
    
  }
  
  async compare(password: string, user: User): Promise<boolean> {
    const validate = bcrypt.compare(password, user.password)
    return validate
  }

  hash(password: string): string {
    const pass = bcrypt.hashSync(password, 10) 
    return pass
  }

  
}