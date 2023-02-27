import { NextFunction, Request, Response } from 'express'
import Storage from 'local-storage'
import jwt from 'jsonwebtoken'
import env from '../utils/validateEnv'

class Permission {
  public authPermission = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = Storage('token')
    if (token) {
      const token_user = await jwt.verify(token, env.Node_ENV)
      if (token_user) res.send('You are already connected')
      else next()
    }
    else next()
  }

  public userPermission = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = Storage('token')
    if (!token) res.send('You are Not Connected')
    else {
      const token_user = await jwt.verify(token, env.Node_ENV)
      if (token_user) next()
      else res.send('Account Not Correct')
    }
  }
}

export default new Permission()