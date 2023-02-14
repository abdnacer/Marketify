import mongoose from 'mongoose'
import  env from '../utils/validateEnv'

mongoose.connect(env.MONGO_URL)
.then(() => {
  console.log('Database Connected')
})
.catch(err => {
  console.error(err)
})