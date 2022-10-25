import mongoose from 'mongoose'

export interface IUser {
  name: string
}

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

export default mongoose.model<IUser>('User', UserSchema)