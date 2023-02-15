import { Request, Response, NextFunction } from "express";

class ControllerCommands {

  public addCommands = async (req: Request, res: Response, next: NextFunction) => {
    // pour envoyer un message d'erreur on va ecrire cette methode
    // next(new HttpException(status, 'message'))
    // par example
    // return next(new HttpException(400, 'Please fill all the fields'))
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