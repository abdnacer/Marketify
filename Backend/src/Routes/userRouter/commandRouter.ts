import express from 'express'

class RouterCommands {
  public router: express.Router

  constructor() {
    this.router = express()
  }

  public Commands() {
    this.router.post('/register')
    this.router.get('verify-email/:token')
    this.router.post('/login')
    this.router.post('/reset-password')
    this.router.post('/forgot-password')
    this.router.get('/verify-forgot-password/:token')
    this.router.post('/form-forgot-password')
    this.router.get('/logout')
  }
}


export default RouterCommands