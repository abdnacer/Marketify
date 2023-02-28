import { Request, Response, NextFunction } from "express"
import HttpException from "../../Services/HttpException";
import db from "../../Models";
import imageDelete from "../../utils/images/deleteFile"; 

class ControllerProduits {

  public addProduits = async (req: Request, res: Response, next: NextFunction) => {
    const {name, id_Categorie, id_Vendeur, description, prix} = req.body
    const images = req.file?.filename

    if(name == '' || id_Categorie == '' || id_Vendeur == '' || description == '' || prix == '') return next(new HttpException(400, 'Please Fill All The Fields'))

    const newProduit = {
      name: name,
      id_Categorie: id_Categorie,
      id_Vendeur: id_Vendeur,
      description: description,
      prix: prix,
      images: images
    }
    
    const isformfield = Object.values(newProduit).every(value => {
      if (value) {
        return true
      }
      else {
        return false
      }
    })

    if(isformfield) {
      await db.Produits.create(newProduit)
      .then(() => res.json('Product Added'))
      .catch(() => new HttpException(400, 'Produit is Not Added'))
    }
    else new HttpException(400, 'Invalid Data')
  };

  public AfficherProduits = async (req: Request, res: Response, next: NextFunction) => {
    const allProducts = await db.Produits.find()
    res.json(allProducts)
  }

  public AfficherProduitUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Afficher Product User')
  }

  public modifierProduits = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const {name, id_Categorie, id_Vendeur, description, prix} = req.body
    const images = req.file?.filename
    
    const findId: any = await db.Produits.findById({_id: id})
    
    if(!findId) return next(new HttpException(400, 'Id Not Found'))

    if(name == '' || id_Categorie == '' || id_Vendeur == '' || description == '' || prix == '') return next(new HttpException(400, 'Please Fill All The Fields'))

    const updateProduit = {
      name: name,
      id_Categorie: id_Categorie,
      id_Vendeur: id_Vendeur,
      description: description,
      prix: prix,
      images: images
    }

    if(updateProduit) {
      await db.Produits.findByIdAndUpdate({_id: id}, updateProduit)
      .then(() => res.send('Product Updated'))
      .catch(() => next(new HttpException(400, 'Product Not Updated')))
    }
    else next(new HttpException(400, 'Invalid Data'))
  }

  public deleteProduits = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params

    const findId: any = await db.Produits.findById({_id: id})

    if(!findId) return next(new HttpException(400, 'Id Not Found'))

    const imagePath = findId.images

    imageDelete.deleteFile(imagePath)

    await db.Produits.findOneAndDelete({_id: id})
    .then(() => res.json('Produit Deleted'))
    .catch(() => next(new HttpException(400, 'Produit Not Deleted')))
  }
}

const Produits = new ControllerProduits

export default Produits