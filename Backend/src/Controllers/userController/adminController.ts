import { Request, Response, NextFunction } from "express"
// import middlewares
import HttpException from "../../Services/HttpException"
import env from '../../utils/validateEnv'
// import Models
import User from '../../Models/User'
import Role from '../../Models/Role'
// import les dependcies
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Storage from 'local-storage'
import { UpdateWriteOpResult } from "mongoose"

class ControllerAdmin {

  public AddUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Add User')
  }

  public modifierUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Modifier User')
  }

  public AfficherUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Afficher User')
  }

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Delete User')
  }
}

const Admin = new ControllerAdmin

export default Admin