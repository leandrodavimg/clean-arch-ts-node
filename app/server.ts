import { app } from './main/app'
import { AppDataSource } from './config/connection/typeorm'

// import { AppDataSourceMongo } from './config/connection/mongoose'
// import '../config/connection/mongoose'

// iniciando o express com o typeorm
AppDataSource.initialize().then(() => {
  console.log('TYPEORM INIT')
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
})



// Iniciando a conexao com o mongo
// app.listen(process.env.PORT, () => {
//   console.log(`Server running at http://localhost:${process.env.PORT}`)
// })