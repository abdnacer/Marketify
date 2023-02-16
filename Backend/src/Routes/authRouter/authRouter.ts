import express from 'express'
import Auth from '../../Controllers/authController/authController'
import errorMiddleware from '../../Middlewares/error.middlewre'

class RouterAuth {
  public router: express.Router

  constructor() {
    this.router = express()
    this.User()
    this.errorMiddleware()
  }

  private User() {
    this.router.post('/register', Auth.Register)
    this.router.post('/login', Auth.Login)
    this.router.get('/reset-password', Auth.ResetPassword)
    this.router.get('/logout', Auth.Logout)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}

export const AuthRouter = new RouterAuth().router