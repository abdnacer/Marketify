import express from 'express'

class RouterProduits {
  public router: express.Router

  constructor() {
    this.router = express()
  }

  public Produit() {
    this.router.post('produits')
    this.router.put('produits')
    this.router.get('produits')
    this.router.delete('produits')
  }
}


export default RouterProduits