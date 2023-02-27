import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { db_conex } from './Config/db'
import './Models'
import env from './utils/validateEnv'
import { AuthRouter } from './Routes/authRouter/authRouter'
import { ProduitRouter } from './Routes/userRouter/produitRouter'
import { CategorieRouter } from './Routes/userRouter/categorieRouter'
import { CommandsRouter } from './Routes/userRouter/commandRouter'
import { AdminRouter } from './Routes/userRouter/adminRouter'
import multer from 'multer'
import cookieParser from 'cookie-parser';

multer({
  dest: 'src/public'
})

class App {
  public app: express.Application
  
  constructor() {
    this.app = express()
    this.initializeMiddlewares()
    this.db()
    this.router()
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(cors())
  }

  private db() {
    db_conex
  }

  private router() {
    this.app.use('/api/auth', AuthRouter)
    this.app.use('/api/user', AdminRouter)
    this.app.use('/api/user', ProduitRouter)
    this.app.use('/api/user', CategorieRouter)
    this.app.use('/api/user', CommandsRouter)
  }

  public listen() {
    const port = env.PORT || 8888
    this.app.listen(port, () => console.log(`Server is Runing on Port ${port}`))
  }
}

export default App