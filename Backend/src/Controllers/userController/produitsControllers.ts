import { Request, Response, NextFunction } from "express"
import sharp from 'sharp'
import { UpdateWriteOpResult } from "mongoose"
import Storage from 'local-storage'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import formidable from 'formidable';
import path from "mongoose"
import join from "lodash"
import { MongoClient, Binary } from 'mongodb';
// import Les Middlewares
import HttpException from "../../Services/HttpException"
import env from '../../utils/validateEnv'
// import Model
import db from "../../Models"

class ControllerProduits {

  public addProduits = async (req: Request, res: Response, next: NextFunction) => {
    const form = new formidable.IncomingForm()

    var formfields = form.parse(req, (err, fields, files) => {
      res.send("within form.parse method, subject field of fields object is: " + fields.subjects);
      return fields;
    })
  }

  public AfficherProduits = async (req: Request, res: Response, next: NextFunction) => {
    const id = "63f3869b52b8f966dd486830"
    try {
      const imageBuffer: any = await db.Produits.findOne({ id })
      // res.send(imageBuffer.image)
      // const { imageBuffer } = req.body;


      const image = await sharp(imageBuffer.image).toBuffer();
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': image.length
      });
      res.send(image)
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
}

const Produits = new ControllerProduits

export default Produits