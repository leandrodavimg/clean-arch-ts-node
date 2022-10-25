interface IAddress {
  email: string
  name: string
}

type ITypeMail = 'welcome' | 'recoveryPassword' 

export interface IMessage {
  to: IAddress
  type: ITypeMail
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}