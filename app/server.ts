import { app } from './main/app'
import { AppDataSource } from './config/connection/typeorm'
import { AppMongoose } from './config/connection/mongoose'


// Start app with typeorm
// AppDataSource.initialize().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`Server running at http://localhost:${process.env.PORT}`)
//   })
// })

// start app with mongoose
AppMongoose.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
})
