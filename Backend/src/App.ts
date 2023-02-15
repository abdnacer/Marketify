import 'dotenv/config'
import express from 'express'
import { db_conex } from './Config/db'
import env from './utils/validateEnv'

class App {
  public app: express.Application

  constructor() {
    this.app = express();
    this.db();
    this.initializeMiddlewares();
    this.router()
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }))
  }

  private db() {
    db_conex
  }

  private router() {
    this.app.use('/api/auth')
    this.app.use('/api/user')
    this.app.use('/api/user')
    this.app.use('/api/user')
  }

  public listen() {
    const port = env.PORT || 8888
    this.app.listen(port, () => console.log(`server is runing on port ${port}`))
  }
}

export default App