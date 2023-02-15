import { Request, Response, NextFunction } from "express"
class ControllerAuth {

  public Login = async (req: Request, res: Response, next: NextFunction) => {
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
