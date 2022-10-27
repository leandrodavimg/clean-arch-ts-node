import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from 'express'
import swaggerUI from 'swagger-ui-express'
import { router } from '@main/routes'
import swaggerDocs from '@config/swagger/swagger.json'

const app = express()

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)) // ! refactor swagger

// ! refactor cors
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: '',
  origin: ['http://localhost:4444'],
  preflightContinue: false
}

// Use with middleware
router.use(cors(options))
// Enable pre-flight
router.options('*', cors(options))


app.use(router)


export { app }