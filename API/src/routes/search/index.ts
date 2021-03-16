import User, { IUser } from '../../models/User'
import * as Boom from '@hapi/boom'
import * as soundex from 'soundex-phonetics'

export default [
  {
    method: 'GET',
    path: '/search',
    async handler(request: any, h: any) {
      try {
        const q = soundex(request.query.q)

        const users: Array<IUser> = await User.find({
          $or: [
            { soundexName: q },
            { soundexLogin: q },
          ],
        })

        return users
      } catch (err) {
        return Boom.badRequest(err.message)
      }
    },
  },
]
