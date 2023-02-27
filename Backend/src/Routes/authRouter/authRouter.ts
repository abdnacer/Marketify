import express from 'express'
import Auth from '../../Controllers/authController/authController'
import errorMiddleware from '../../Middlewares/error.middlewre'
import permission from '../../Middlewares/permission'

class RouterAuth {
  public router: express.Router

  constructor() {
    this.router = express()
    this.User()
    this.errorMiddleware()
  }

  private User() {
    this.router.post('/register', permission.authPermission, Auth.Register)
    this.router.post('/login', permission.authPermission, Auth.Login)
    this.router.put('/reset-password', permission.userPermission, Auth.ResetPassword)
    this.router.get('/logout', permission.authPermission, Auth.Logout)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}

export const AuthRouter = new RouterAuth().router