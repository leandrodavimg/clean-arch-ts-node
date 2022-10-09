import { IMailProvider, IMessage } from "../../../providers/mail-provider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class SendMailMailtrap implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: 'Nome da empresa',
        address: 'email@email.com.br'
      },
      subject: `Email: ${message.type}`,
      html: `Olá ${message.to.name}, seja bem vindo! <b>${message.type}</b>`
      })
  }
}