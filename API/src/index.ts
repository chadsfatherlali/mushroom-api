import { Server } from '@hapi/hapi'
import db from './providers/db'

import routes from './routes'

/** Server start */
const init = async ():Promise<any> => {
  const server: Server = new Server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      }
    }
  })

  await db()
  await routes(server)
  await server.start()

  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
