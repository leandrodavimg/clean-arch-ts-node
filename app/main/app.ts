import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import swaggerUI from 'swagger-ui-express'
import { router } from './routes'
import swaggerDocs from '../swagger/swagger.json'

const app = express()

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)) //refatorar
app.use(router)


export { app }