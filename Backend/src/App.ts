import 'dotenv/config'
import express from 'express'
import { db_conex } from './Config/db'
import env from './utils/validateEnv'
import RouterAuth from './Routes/authRouter/authRouter'
import RouterCategorie from './Routes/userRouter/categorieRouter'
import RouterProduits from './Routes/userRouter/produitRouter'
import RouterCommands from './Routes/userRouter/commandRouter'

class App {
  public app: express.Application

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.db();
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
    this.app.use('/api/auth', new RouterAuth().User)
    this.app.use('/api/user', new RouterProduits().Produit)
    this.app.use('/api/user', new RouterCategorie().Categorie)
    this.app.use('/api/user', new RouterCommands().Commands)
  }

  public listen() {
    const port = env.PORT || 8888
    this.app.listen(port, () => console.log(`server is runing on port ${port}`))
  }
}

export default App