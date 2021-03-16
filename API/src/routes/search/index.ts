import User, { IUser } from '../../models/User'
import * as Boom from '@hapi/boom'
import * as soundex from 'soundex-phonetics'

export default [
  {
    method: 'GET',
    path: '/search',
    async handler(request: any, h: any) {
      try {
        console.log('QDEV', soundex(request.query.q))

        const users: Array<IUser> = await User.find({
          $or: [
            { soundexName: soundex(request.query.q) },
            { soundexLogin: soundex(request.query.q) },
          ],
        })

        return users
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
]
