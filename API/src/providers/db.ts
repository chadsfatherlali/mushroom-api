import * as mongoose from 'mongoose'

export default async () => {
  try {
    return await mongoose.connect('mongodb://mushroomsoft:1234@mongo:27017/mushroomsoft', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true 
    })
  } catch (err) {
    console.log('KO DATABASE', err)
  } 
}
