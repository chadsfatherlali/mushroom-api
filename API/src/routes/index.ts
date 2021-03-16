import { Server } from '@hapi/hapi'

import healtCheck from './healtcheck'
import users from './users'
import search from './search'

export default async (server: Server) => {
  return server.route([...healtCheck, ...users, ...search])
}
