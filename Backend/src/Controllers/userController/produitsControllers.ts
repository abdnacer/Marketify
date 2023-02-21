import { Request, Response, NextFunction } from "express"
import { UpdateWriteOpResult } from "mongoose"
import Storage from 'local-storage'
import jwt from 'jsonwebtoken'
import fs from 'fs'
// import formidable from 'formidable'
import { MongoClient, Binary } from 'mongodb';
// import Les Middlewares
import HttpException from "../../Services/HttpException"
import env from '../../utils/validateEnv'
// import Model
import db from "../../Models"

class ControllerProduits {

  public addProduits = async (req: Request, res: Response, next: NextFunction) => {
    // const form = new formidable.IncomingForm()

    // res.send(form)
  }

  public AfficherProduits = async (req: Request, res: Response, next: NextFunction) => {
    res.send('afficher' )
  }
}

const Produits = new ControllerProduits

export default Produits