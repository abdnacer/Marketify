import express from 'express'
import Produits from '../../Controllers/userController/produitsControllers'
import errorMiddleware from '../../Middlewares/error.middlewre'

class RouterProduits {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Produit()
    this.errorMiddleware()
  }

  private Produit() {
    this.router.post('/produits', Produits.addProduits)
    this.router.put('/produits/:id', Produits.modifierProduits) 
    this.router.get('/produits', Produits.AfficherProduits)
    this.router.get('/produits/user', Produits.AfficherProduitUser)
    this.router.delete('/produits/:id', Produits.deleteProduits)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}


export const ProduitRouter = new RouterProduits().router