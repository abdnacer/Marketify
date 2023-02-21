import { Request, Response, NextFunction } from "express";

class ControllerCategories {

  public addCategories = async (req: Request, res: Response, next: NextFunction) => {
    // pour envoyer un message d'erreur on va ecrire cette methode
    // next(new HttpException(status, 'message'))
    // par example
    // return next(new HttpException(400, 'Please fill all the fields'))
    res.send('Create Categories')
  } 

  public modifierCategories = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Modifier Categories')
  }

  public afficherCategories = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Afficher Categories')
  }

  public deleteCategories = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Delete Categories')
  }
}

const Categories = new ControllerCategories

export default Categories