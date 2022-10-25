import mongoose from 'mongoose'

export const AppMongoose = mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log('Mongo connected')
})
.catch(err => {
    console.log('Failed to connect to MongoDB', err)
  })
