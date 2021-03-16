export default [
  {
    method: 'GET',
    path: '/healtCheck',
    async handler (request:Request, h:any) {
      return {
        status: 'OK'
      }
    }
  }
]