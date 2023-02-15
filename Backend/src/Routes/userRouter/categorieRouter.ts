import express from 'express'

class RouterCategorie {
  public router: express.Router

  constructor() {
    this.router = express()
  }

  public Categorie() {
    this.router.post('/categories')
    this.router.put('/categories')
    this.router.get('/categories')
    this.router.delete('/categories')
  }
}


export default RouterCategorie