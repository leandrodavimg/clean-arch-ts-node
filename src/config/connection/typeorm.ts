import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"

const port = process.env.TYPEORM_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: port,
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASS,
  database: process.env.TYPEORM_BASE,
  entities: [`./src/infra/repositories/typeorm/entities/*.{ts,js}`],
  migrations: [`./src/infra/repositories/typeorm/migrations/*.{ts,js}`],
})