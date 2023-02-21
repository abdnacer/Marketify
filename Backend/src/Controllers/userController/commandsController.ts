import { Request, Response, NextFunction } from "express";
import HttpException from "../../Services/HttpException";
import db from '../../Models'
class ControllerCommands {

  public addCommands = async (req: Request, res: Response, next: NextFunction) => {
    
    const { id_Produit, id_Vendeur, id_Client, total_prix, quantity } = req.body;
    if (
      id_Produit == '' ||
      id_Vendeur == '' ||
      id_Client == '' ||
      total_prix == '' ||
      quantity == '') {
      return next(new HttpException(400, 'fill all fields'))
    }
    const data = await db.Commands.create({
      id_Produit,
      id_Vendeur,
      id_Client,
      total_prix,
      quantity
    })
    if (!data) { return next(new HttpException(400, 'commande not created')) }
    res.send('Create Commands')
  }

  public modifierCommands = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Modifier Commands')
  }

  public afficherCommands = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Afficher Commands')
  }

  public deleteCommands = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Delete Commands')
  }
}

const Commands = new ControllerCommands

export default Commands