import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import db from "../../Models";
import HttpException from "../../Services/HttpException";
import env from '../../utils/validateEnv'

class ControllerCategories {

  public addCategories = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    if (name == '') res.json('Please Fill All The Fields')
    else{
      const token = req.cookies.token;
      if (!token) res.json('Token Not Found')
      else{
        const tokenVerify: any = await jwt.verify(token, env.Node_ENV)
        if (!tokenVerify) res.json('Token Not verified')
        else{
          const findUser:any = await db.User.findById({ _id: tokenVerify.id })
          if (!findUser) res.json('User Not Found')
          else{
            const categorie = await db.Categories.create({
              name: name,
              id_Vendeur: findUser.id
            })
        
            if (!categorie) res.json('Categorie Not Created')
            else res.json('Categorie Created')
          }
      
        }
    
      }
  

    }
  }

  public modifierCategories = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { name } = req.body

    if (name == '') return next(new HttpException(400, 'Please Fill All The Fields'))

    const findId: any = await db.Categories.findById({ _id: id })

    if (!findId) return next(new HttpException(400, 'Id Not Found'))

    const categorie = await db.Categories.updateOne({ _id: findId._id }, { $set: { name } })

    if (!categorie) return next(new HttpException(400, 'Categorie Not Updated'))
    else res.status(200).json('Categorie Updated')
  }

  public afficherCategoriesUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return next(new HttpException(400, 'Token Not Found'))

    const verifyToken: any = await jwt.verify(token, env.Node_ENV)
    if (!verifyToken) return next(new HttpException(400, 'Token Not Verify'))

    const findUser = await db.User.findById({ _id: verifyToken.id })
    if (!findUser) return next(new HttpException(400, 'User Not Found'))

    const categorie = await db.Categories.find({ id_Vendeur: findUser.id })

    if (!categorie) return next(new HttpException(400, 'Categorie Not Found'))
    else res.status(200).json(categorie)
  }

  public afficherCategories = async (req: Request, res: Response, next: NextFunction) => {

    const categorie = await db.Categories.find()
      .populate({ path: 'id_Vendeur', model: db.User })

    if (!categorie) res.json('Categorie Not Found')
    else res.json(categorie)
  }

  public deleteCategories = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) return next(new HttpException(400, 'Not Id Categories'))

    const findCategorie = await db.Categories.findById({ _id: id })
    if (!findCategorie) return next(new HttpException(400, 'Categorie Not Found'))

    const categorie = await db.Categories.deleteOne({ _id: findCategorie._id })

    if (!categorie) return next(new HttpException(400, 'Categorie Not Deleted'))
    else res.status(200).json('Categorie Deleted')
  }
}

const Categories = new ControllerCategories

export default Categories