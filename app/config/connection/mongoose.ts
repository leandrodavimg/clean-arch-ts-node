import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/test_solid', () => {
  console.log('Conected mongodb with mongoose')
})

