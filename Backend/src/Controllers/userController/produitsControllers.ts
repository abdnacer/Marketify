import { Request, Response, NextFunction } from "express";

class ControllerProduits {

  public addProduits = async (req: Request, res: Response, next: NextFunction) => {
    // pour envoyer un message d'erreur on va ecrire cette methode
    // next(new HttpException(status, 'message'))
    // par example
    // return next(new HttpException(400, 'Please fill all the fields'))
    res.send('Create Produits')
  }

  public modifierProduits = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Modifier Produits')
  }

  public AfficherProduits = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Afficher Produits')
  }

  public deleteProduits = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Delete Produits')
  }
}

const Produits = new ControllerProduits

export default Produits