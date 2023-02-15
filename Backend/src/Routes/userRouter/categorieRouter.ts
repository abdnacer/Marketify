import express from 'express'
import Categories from '../../Controllers/userController/categorieController'
import errorMiddleware from '../../Middlewares/error.middlewre'

class RouterCategorie {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Categorie()
    this.errorMiddleware()
  }

  private Categorie() {
    this.router.post('/categories', Categories.addCategories)
    this.router.put('/categories', Categories.modifierCategories)
    this.router.get('/categories', Categories.afficherCategories)
    this.router.delete('/categories', Categories.deleteCategories)
  }

  private errorMiddleware(){
    this.router.use(errorMiddleware)
  }
}


export const CategorieRouter = new RouterCategorie().router