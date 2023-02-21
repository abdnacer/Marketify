import { Request, Response, NextFunction } from "express";
import HttpException from "../../Services/HttpException";
import db from '../../Models'
class ControllerCommands {

  public addCommands = async (req: Request, res: Response, next: NextFunction) => {

    const { id_Produit, id_Vendeur, id_Client, total_prix, quantity, status } = req.body;
    if (
      id_Produit == '' ||
      id_Vendeur == '' ||
      id_Client == '' ||
      total_prix == '' ||
      quantity == '' ||
      status == '') {
      return next(new HttpException(400, 'fill all fields'))
    }
    const data = await db.Commands.create({
      id_Produit,
      id_Vendeur,
      id_Client,
      total_prix,
      quantity,
      status
    })
    if (!data) { return next(new HttpException(400, 'commande not created')) }
    else {
      res.send('Create Commands')
    }
  }

  public modifierCommands = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { status } = req.body

    const foundStatus = await db.Status.findById({ _id: status })
    if (!foundStatus) return next(new HttpException(400, 'Status Not Found'))

    const commande = await db.Commands.findById({ _id: id })
    if (!commande) { return next(new HttpException(400, 'commande not found')) }

    const update = await db.Commands.updateOne({ _id: commande._id }, { $set: { status: status } })
    if (!update) { return next(new HttpException(200, 'comande not updated ')) }

    else { return next(new HttpException(200, 'comande  updated ')) }

  }

  public afficherCommands = async (req: Request, res: Response, next: NextFunction) => {
     const commandes  = await db.Commands.find(); 
    res.status(200).json(commandes)
  }


}

const Commands = new ControllerCommands

export default Commands