import { Document, Schema, Model, model } from 'mongoose'

export interface IUser extends Document {
  _id: number,
  email?: string,
  name?: string,
  login?: string,
  avatar_url?: string,
  soundexName?: string,
  soundexLogin?: string,
}

const UserSchema:Schema = new Schema({
  _id: {
    required: true,
    type: Number
  },
  email: {
    type: String,
    default: null,
  },
  name: {
    type: String,
  },
  login: {
    type: String
  },
  avatar_url: {
    type: String
  },
  soundexName: {
    index: true,
    type: String,
  },
  soundexLogin: {
    index: true,
    type: String,
  },
})

const User:Model<IUser> = model<IUser>('User', UserSchema)

export default User
