import { Request, Response, NextFunction } from "express";

class ControllerProduits {
  
  public addProduits = async (req: Request, res:Response, next: NextFunction) => {
    res.send('Create Produits')
  }

  public modifierProduits = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Modifier Produits')
  }

  public AfficherProduits = async (req: Request, res:Response, next: NextFunction) => {
    res.send('Afficher Produits')
  }

  public deleteProduits =async (req:Request, res:Response, next: NextFunction) => {
    res.send('Delete Produits')
  }
}

const Produits = new ControllerProduits 

export default Produits