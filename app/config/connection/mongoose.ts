import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_DB, () => {
  console.log('Conected mongodb with mongoose')
})

