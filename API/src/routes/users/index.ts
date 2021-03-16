import User, { IUser } from '../../models/User'
import * as Boom from '@hapi/boom'
import * as soundex from 'soundex-phonetics'

export default [
  {
    method: 'GET',
    path: '/users',
    async handler(request: any, h: any) {
      try {
        const users: Array<IUser> = await User.find()

        return users
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    async handler(request: any, h: any) {
      try {
        const user: any = await User.findOne({ _id: request.params.id })

        return user
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
  {
    method: 'POST',
    path: '/users',
    async handler(request: any, h: any) {
      try {
        const newUser: IUser = {
          ...request.payload,
          soundexName: soundex(request.payload.name),
          soundexLogin: soundex(request.payload.login)
        }

        const user: IUser = await User.create(newUser)

        return user
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
  {
    method: 'PUT',
    path: '/users',
    async handler(request: any, h: any) {
      try {
        const updateUser: IUser = {
          ...request.payload,
          soundex: soundex(request.payload.name),
          soundexLogin: soundex(request.payload.login)
        }

        const user: {} = await User.updateOne({ _id: request.payload._id }, { $set: updateUser })

        return user
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    async handler(request: any, h: any) {
      try {
        const user: {} = await User.deleteOne({ _id: request.params.id })

        return user
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
]
