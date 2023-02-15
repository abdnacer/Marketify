import express from 'express'
import Categories from '../../Controllers/userController/categorieController'

class RouterCategorie {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Categorie()
  }

  private Categorie() {
    this.router.post('/categories', Categories.addCategories)
    this.router.put('/categories', Categories.modifierCategories)
    this.router.get('/categories', Categories.afficherCategories)
    this.router.delete('/categories', Categories.deleteCategories)
  }
}


export const CategorieRouter = new RouterCategorie().router