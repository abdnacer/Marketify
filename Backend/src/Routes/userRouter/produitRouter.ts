import express from 'express'
import Produits from '../../Controllers/userController/produitsControllers'
import errorMiddleware from '../../Middlewares/error.middlewre'

import multer from 'multer'
// import {upload} from '../../utils/images/imageUpload'


// const upload = require('../../outils/imageUpload')
import fileUpload from '../../utils/images/imageUpload'

class RouterProduits {
  public router: express.Router

  constructor() {
    this.router = express()
    this.Produit()
    this.errorMiddleware()
  }

  private Produit() {
    this.router.post('/produits', fileUpload.single('images'),  Produits.addProduits)
    this.router.get('/produits', Produits.AfficherProduits)
    this.router.put('/produits/:id', fileUpload.single('images'), Produits.modifierProduits) 
    this.router.delete('/produits/:id', Produits.deleteProduits)



    // this.router.get('/produits/user', Produits.AfficherProduitUser)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware)
  }
}


export const ProduitRouter = new RouterProduits().router