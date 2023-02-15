import express from 'express'
import Auth from '../../Controllers/authController/authController'

class RouterAuth {
  public router: express.Router

  constructor() {
    this.router = express()
    this.User()
  }

  private User() {
    this.router.post('/register', Auth.Register)
    this.router.post('/login', Auth.Login)
    this.router.post('/reset-password', Auth.ResetPassword)
    this.router.get('/logout', Auth.Logout)
  }
}

export const AuthRouter = new RouterAuth().router