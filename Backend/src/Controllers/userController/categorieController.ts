import { Request, Response, NextFunction } from "express";

class ControllerCategories {
  
  public addCategories = async (req: Request, res:Response, next:NextFunction) => {
    res.send('Create Categories')
  }

  public modifierCategories = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Modifier Categories')
  }

  public afficherCategories = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Afficher Categories')
  }

  public deleteCategories = async (req:Request, res:Response, next:NextFunction) => {
    res.send('Delete Categories')
  }
}

const Categories = new ControllerCategories 

export default Categories