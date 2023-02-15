import { Request, Response, NextFunction } from "express";

class ControllerCommands {

  public addCommands = async(req: Request, res:Response, next:NextFunction) => {
    res.send('Create Commands')
  }

  public modifierCommands = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Modifier Commands')
  }

  public afficherCommands = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Afficher Commands')
  }

  public deleteCommands = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Delete Commands')
  }
}

const Commands = new ControllerCommands

export default Commands