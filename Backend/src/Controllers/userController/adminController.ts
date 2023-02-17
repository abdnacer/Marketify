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

class ControllerAdmin {

  public AddUser = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name, last_name, phone, address, role, email, password, confirm_password } = req.body

    if (first_name == '' || last_name == '' || phone == '' || role == '' || address == '' || email == '' || password == '' || confirm_password == '') return next(new HttpException(400, 'Please fill all the fields'))

    const userExists = await User.findOne({ email })
    const phoneExists = await User.findOne({ phone })
    const role_Correct = await Role.findById({ _id: role })

    if (userExists) return next(new HttpException(400, 'Email Déja Exists'))
    if (phoneExists) return next(new HttpException(400, 'Phone Déja Exists'))
    if (!role_Correct) return next(new HttpException(400, 'Role Id Not Correct')) 

    const salt = await bcrypt.genSalt(10)
    const hash_pass = await bcrypt.hash(password, salt)

      if (role_Correct.name === 'vendeur') {
        const user_Vendeur = await User.create({
          first_name,
          last_name,
          phone,
          address,
          email,
          password: hash_pass,
          role: role
        })

        if (user_Vendeur) res.status(200).json({ user_Vendeur })
        if (!user_Vendeur) return next(new HttpException(400, 'Invalid User Data'))
      }

      else if (role_Correct.name === 'livreur') {
        const user_livreur = await User.create({
          first_name,
          last_name,
          phone,
          address: '',
          email,
          password: hash_pass,
          role: role
        })

        if (user_livreur) res.status(200).json({ user_livreur })
        if (!user_livreur) return next(new HttpException(400, 'Invalid User Data'))
      }
      else {
        return next(new HttpException(400, "Your Role doesn't exists"))
      }





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