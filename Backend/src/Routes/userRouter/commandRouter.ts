import express from 'express'
import Commands from '../../Controllers/userController/commandsController'

class RouterCommands {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Commands()
  }

  private Commands() {
    this.router.post('/commands', Commands.addCommands)
    this.router.put('/commands', Commands.modifierCommands)
    this.router.get('/commands', Commands.afficherCommands)
    this.router.delete('/commands', Commands.deleteCommands)
  }
}


export const CommandsRouter = new RouterCommands().router