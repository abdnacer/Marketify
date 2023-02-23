import { Request, Response, NextFunction } from "express"
// import middlewares
import HttpException from "../../Services/HttpException"
import env from '../../utils/validateEnv'
// import Model
import db from "../../Models"
// import les dependcies
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Storage from 'local-storage'
import { UpdateWriteOpResult } from "mongoose"

class ControllerAdmin {

  public AddUser = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name, last_name, phone, address, role, email, password, confirm_password } = req.body

    if (first_name == '' || last_name == '' || phone == '' || role == '' || address == '' || email == '' || password == '' || confirm_password == '') return next(new HttpException(400, 'Please fill all the fields'))

    if (
      typeof first_name !== 'string' ||
      typeof last_name !== 'string' ||
      typeof phone !== 'string' ||
      typeof address !== 'string' ||
      typeof role !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof confirm_password !== 'string'
    ) return next(new HttpException(400, 'Type The One Fields Not Correct'))

    const userExists = await db.User.findOne({ email })
    const phoneExists = await db.User.findOne({ phone })
    const roleCorrect = await db.Role.findById({ _id: role })

    if (userExists) return next(new HttpException(400, 'Email Déja Exists'))
    if (phoneExists) return next(new HttpException(400, 'Phone Déja Exists'))
    if (!roleCorrect) return next(new HttpException(400, 'Role Id Not Correct'))

    const salt = await bcrypt.genSalt(10)
    const hash_pass = await bcrypt.hash(password, salt)

    if (roleCorrect.name === 'vendeur') {
      const user_Vendeur = await db.User.create({
        first_name,
        last_name,
        phone,
        address,
        email,
        password: hash_pass,
        role: role
      })

      if (!user_Vendeur) return next(new HttpException(400, 'Invalid User Data'))
      
      if (user_Vendeur) res.status(200).json({ 
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        address: address,
        email: email,
        role: roleCorrect.name
       })
    }

    else if (roleCorrect.name === 'livreur') {
      const user_livreur = await db.User.create({
        first_name,
        last_name,
        phone,
        address: '',
        email,
        password: hash_pass,
        role: role
      })

      if (!user_livreur) return next(new HttpException(400, 'Invalid User Data'))

      if (user_livreur) res.status(200).json({ 
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        address: address,
        email: email,
        role: roleCorrect.name
       })
    }
    else {
      return next(new HttpException(400, "Your Role doesn't exists"))
    }
  }

  public modifierUser = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name, last_name, phone, address, email } = req.body

    if (first_name == '' || last_name == '' || phone == '' || address == '' || email == '') return next(new HttpException(400, 'Please fill all the fields'))

    if (
      typeof first_name !== 'string' ||
      typeof last_name !== 'number' ||
      typeof phone !== 'string' ||
      typeof address !== 'string' ||
      typeof email !== 'string'
    ) return next(new HttpException(400, 'Type The One Fields Not Correct'))

    const userExists = await db.User.findOne({ email })
    const phoneExists = await db.User.findOne({ phone })

    if (userExists) return next(new HttpException(400, 'Email Déja Exists'))
    if (phoneExists) return next(new HttpException(400, 'Phone Déja Exists'))

    const token: any = Storage('token')
    const verifyToken: any = await jwt.verify(token, env.Node_ENV)
    const find_user_id = await db.User.findById(verifyToken.id)
    if (!find_user_id) return next(new HttpException(400, 'This Compt Not Correct'))

    const new_data_user: UpdateWriteOpResult = await db.User.updateMany({ _id: find_user_id._id }, {
      $set: {
        first_name,
        last_name,
        phone,
        address,
        email
      }
    })
    if (!new_data_user) return next(new HttpException(400, 'User Not Updated'))
    if (new_data_user) res.status(200).json('User Updated')
  }

  public AfficherUserLivreur = async (req: Request, res: Response, next: NextFunction) => {
    const role_livreur = await db.Role.find({ name: 'livreur' })

    if (role_livreur[0].name === 'livreur') {
      const user = await db.User.find({ role: role_livreur[0].id })
      res.json(user)
    }
    else {
      return next(new HttpException(400, 'Not Found Role'))
    }

  }

  public AfficherUserVendeur = async (req: Request, res: Response, next: NextFunction) => {
    const role_vendeur = await db.Role.find({ name: 'vendeur' })

    if (role_vendeur[0].name === 'vendeur') {
      const user = await db.User.find({ role: role_vendeur[0].id })
      res.json(user)
    }
    else {
      return next(new HttpException(400, 'Not Found Role'))
    }

  }

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = Storage('token')

    if (!token) return next(new HttpException(400, 'You Are Not Logged'))

    const verifyToken: any = await jwt.verify(token, env.Node_ENV)
    const userDeleted = await db.User.findByIdAndDelete(verifyToken.id)
    res.status(200).json(`User ${userDeleted?.first_name} ${userDeleted?.last_name} Deleted`)
  }
}

const Admin = new ControllerAdmin

export default Admin