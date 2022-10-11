import { IBcrypt } from "../../../providers/encript-provider";
import bcrypt from 'bcrypt'
import { User } from "../../../entities/user/User";

export class BcryptEncode implements IBcrypt {
  constructor() {
    
  }
  
  compare(password: string, user: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async hash(password: string): Promise<string> {
    const pass = bcrypt.hashSync(password, 10) 
    return pass
  }

  
}