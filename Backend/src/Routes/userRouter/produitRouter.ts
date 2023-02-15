import express from 'express'
import Produits from '../../Controllers/userController/produitsControllers'

class RouterProduits {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Produit()
  }

  private Produit() {
    this.router.post('/produits', Produits.addProduits)
    this.router.put('/produits', Produits.modifierProduits)
    this.router.get('/produits', Produits.AfficherProduits)
    this.router.delete('/produits', Produits.deleteProduits)
  }
}


export const ProduitRouter = new RouterProduits().router