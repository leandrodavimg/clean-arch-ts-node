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
        user: "cfb498d201c0ea",
        pass: "feb3dfef2c5136"
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
        name: message.to.name,
        address: message.to.email
      },
      subject: message.subject,
      html: message.html
      })
  }
}