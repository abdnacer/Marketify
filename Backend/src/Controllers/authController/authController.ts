import { Request, Response, NextFunction } from "express"
import HttpException from "../../Services/HttpException"
class ControllerAuth {

  public Login = async (req: Request, res: Response, next: NextFunction) => {
    // pour envoyer un message d'erreur on va ecrire cette methode
    // next(new HttpException(status, 'message'))
    // par example
    // return next(new HttpException(400, 'Please fill all the fields'))
    res.send('Login')
  }

  public Register = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Register')
  }

  public ResetPassword = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Reset-Password')
  }

  public Logout = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Logout')
  }
}

const Auth = new ControllerAuth

export default Auth;
