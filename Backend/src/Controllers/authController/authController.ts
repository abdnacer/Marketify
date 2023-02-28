import { Request, Response, NextFunction } from "express";
// import middlewares
import HttpException from "../../Services/HttpException";
import env from "../../utils/validateEnv";
// import Model
import db from "../../Models";
// import les dependcies
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class ControllerAuth {
  public Register = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (
      body.first_name == "" ||
      body.last_name == "" ||
      body.phone == "" ||
      body.address == "" ||
      body.email == "" ||
      body.password == "" ||
      body.confirm_password == ""
    )
      res.json("Please fill all the fields");
    else {
      // if (
      //   body.password != body.confirm_password
      // )
      // res.json("Password Not Matched")
      // else {
      const userExists = await db.User.findOne({ email: body.email });
      const phoneExists = await db.User.findOne({ phone: body.phone });

      if (userExists) res.json("Email Déja Exists");
      else {
        if (phoneExists) res.json("Phone Déja Exists");
        else {
          const salt = await bcrypt.genSalt(10);
          const hash_pass = await bcrypt.hash(body.password, salt);

          const role = await db.Role.aggregate([
            { $match: { name: "client" } },
          ]);

          const user = await db.User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            phone: body.phone,
            address: body.address,
            email: body.email,
            password: hash_pass,
            role: role[0]._id,
          });

          if (user) res.json({ user });
          else {
            res.json("Invalid User Data");
          }
        }
      }
      // }
    }
  };

  //  login

  public Login = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (body.email == "" || body.password == "")
      return res.json("Please Fill All The Fields");
    else {
      const user: any = await db.User.findOne({ email: body.email });

      if (!user) return res.json("Email Not Found");
      else {
        const Pass_Correct = await bcrypt.compare(body.password, user.password);

        if (!Pass_Correct) return res.json("Password Not Correct");
        else {
          const role = await db.Role.findById({ _id: user.role });
          const token = this.generateToken(user.id);

          if (user && Pass_Correct && role && token) {
            res.cookie("token", token);
            res.json({
              user: {
                first_name: user.first_name,
                last_name: user.last_name,
                address: user.address,
                phone: user.phone,
                email: user.email,
                role: role.name,
              },
              token: token,
            });
          } else {
            res.json("User Not Correct");
          }
        }
      }
    }
  };

  //  Reset password

  public ResetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { last_password, nouveau_password, confirm_password } = req.body;

    if (last_password == "" || nouveau_password == "" || confirm_password == "")
      return next(new HttpException(400, "Please Fill All The Fields"));

    const token = req.cookies.token;
    const verifyToken: any = await jwt.verify(token, env.Node_ENV);
    const find_user_id = await db.User.findById(verifyToken.id);
    if (!find_user_id) return next(new HttpException(400, "Token Not Correct"));

    const Pass_Correct = await bcrypt.compare(
      last_password,
      find_user_id.password
    );
    if (!Pass_Correct)
      return next(new HttpException(400, "Password Not Correct"));

    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(nouveau_password, salt);

    const newPassword = await db.User.updateOne(
      { _id: find_user_id._id },
      { $set: { password: hash_pass } }
    );
    if (newPassword) res.status(200).json("Password Your Changed");
  };

  public logout = async(req: Request, res: Response) => {
    await res.clearCookie("token");
    res.send('Logout Succes');
  }

  private generateToken = (id: string) => {
    const token = jwt.sign({ id }, env.Node_ENV, {
      expiresIn: "30d",
    });

    return token;
  };
}

const Auth = new ControllerAuth();

export default Auth;
