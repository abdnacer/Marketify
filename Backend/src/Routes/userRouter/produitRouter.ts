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
    this.router.put('/produits', Produits.modifierProduits)
    this.router.get('/produits', Produits.AfficherProduits)
    this.router.delete('/produits', Produits.deleteProduits)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}


export const ProduitRouter = new RouterProduits().router