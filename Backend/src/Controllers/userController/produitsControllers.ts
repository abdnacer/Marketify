import { Request, Response, NextFunction } from "express"
import { UpdateWriteOpResult } from "mongoose"
import Storage from 'local-storage'
import jwt from 'jsonwebtoken'
// import Les Middlewares
import HttpException from "../../Services/HttpException"
import env from '../../utils/validateEnv'
// import Model
import db from "../../Models"
import User from "../../Models/User"

class ControllerProduits {

  public addProduits = async (req: Request, res: Response, next: NextFunction) => {
    const { name, id_Categorie, id_Vendeur, description, prix } = req.body

    if (name == '' || id_Categorie == '' || id_Vendeur == '' || description == '' || prix == '') return next(new HttpException(400, 'Please Fill All The Fields'))

    if (
      typeof name !== 'string' ||
      typeof id_Categorie !== 'string' ||
      typeof id_Vendeur !== 'string' ||
      typeof description !== 'string' ||
      typeof prix !== 'string'
    ) return next(new HttpException(400, 'Type The One Fields Not Correct'));


    const categorieFound = await db.Categories.findById({ _id: id_Categorie })

    if (!categorieFound) return next(new HttpException(400, 'This Categorie Not Found'))

    const produit = await db.Produits.create({
      name,
      id_Categorie,
      id_Vendeur,
      description,
      prix
    })

    if (produit) res.status(200).json(produit)
    if (!produit) return next(new HttpException(400, 'Produit Not Created'))
  }

  public modifierProduits = async (req: Request, res: Response, next: NextFunction) => {
    const { id_Produit, name, id_Categorie, id_Vendeur, description, prix } = req.body

    if (name == '' || id_Categorie == '' || id_Vendeur == '' || description == '' || prix == '') return next(new HttpException(400, 'Please Fill All The Fields'))

    if (
      typeof id_Produit !== 'string' ||
      typeof name !== 'string' ||
      typeof id_Categorie !== 'string' ||
      typeof id_Vendeur !== 'string' ||
      typeof description !== 'string' ||
      typeof prix !== 'string'
    ) return next(new HttpException(400, 'Type The One Fields Not Correct'));

    const categorieFound = await db.Categories.findById({ _id: id_Categorie })

    if (!categorieFound) return next(new HttpException(400, 'Categorie Not Found'))

    const idProduit = await db.Produits.find({ id_Produit })

    const produit: UpdateWriteOpResult = await db.Produits.updateMany({ _id: idProduit[0]._id }, {
      $set: {
        name,
        id_Categorie,
        id_Vendeur,
        description,
        prix
      }
    })

    if (!produit) return next(new HttpException(400, 'Produit Not Updated'))
    if (produit) res.status(200).json('Produit Updated')
  }

  public AfficherProduits = async (req: Request, res: Response, next: NextFunction) => {
    const produits = await db.Produits.find()

    if (!produits) return next(new HttpException(400, 'Produits Not Found'))
    if (produits) res.status(200).json(produits)
  }

  public AfficherProduitUser = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = Storage('token')

    if (!token) return next(new HttpException(400, 'Your Are Not Connected'))

    const verifyToken: any = await jwt.verify(token, env.Node_ENV)
    const findUser = await db.User.findById(verifyToken.id)

    if (!findUser) return next(new HttpException(400, 'Data User Not Found'))

    const DataProduitUser = await db.Produits.find({ id_Vendeur: findUser._id })

    if (DataProduitUser) return next(new HttpException(400, 'Produit The User Not Found in Collection Produits'))
    if (DataProduitUser) res.status(200).json(DataProduitUser)
  }

  public deleteProduits = async (req: Request, res: Response, next: NextFunction) => {
    const id: any = req.params.id

    if (!id) return next(new HttpException(400, 'Id is Unknown'))

    const findProduit = await db.Produits.findById({ _id: id })

    if (!findProduit) return next(new HttpException(400, 'Produit Not Found'))

    const produitDeleted = await db.Produits.findByIdAndDelete({ _id: id })

    if (!produitDeleted) return next(new HttpException(400, 'Produit Not Deleted'))
    if (produitDeleted) res.status(200).json('Produit Deleted')
  }
}

const Produits = new ControllerProduits

export default Produits