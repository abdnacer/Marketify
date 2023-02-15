import mongoose from 'mongoose'
import env from '../utils/validateEnv'

class DB {
  constructor() {
    mongoose.connect(env.MONGO_URL)
      .then(() => {
        console.log('Database Connected')
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const db_conex = new DB()