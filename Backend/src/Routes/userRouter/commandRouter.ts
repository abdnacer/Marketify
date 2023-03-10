import express from 'express'
import Commands from '../../Controllers/userController/commandsController'
import errorMiddleware from '../../Middlewares/error.middlewre'

class RouterCommands {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Commands()
    this.errorMiddleware()
  }

  private Commands() {
    this.router.post('/commands', Commands.addCommands)
    this.router.put('/commands/:id', Commands.modifierCommands)
    this.router.get('/commands', Commands.afficherCommands)
  }

  private errorMiddleware(){
    this.router.use(errorMiddleware)
  }
}


export const CommandsRouter = new RouterCommands().router