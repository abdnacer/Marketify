import express from "express"
import errorMiddleware from "../../Middlewares/error.middlewre"
import Admin from "../../Controllers/userController/adminController"

class RouterAdmin {
  public router: express.Router

  constructor(){
    this.router = express()
    this.AdminUser()
    this.errorMiddleware()
  }

  private AdminUser(){
    this.router.post('/admin/user', Admin.AddUser)
    this.router.put('/admin/user', Admin.modifierUser)
    this.router.get('/admin/user/livreur', Admin.AfficherUserLivreur)
    this.router.get('/admin/user/vendeur', Admin.AfficherUserVendeur)
    this.router.delete('/admin/user', Admin.deleteUser)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}

export const AdminRouter = new RouterAdmin().router