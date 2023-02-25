import { Request, Response, NextFunction } from "express";
// import middlewares
import HttpException from "../../Services/HttpException";
import env from "../../utils/validateEnv";
// import Model
import db from "../../Models";
// import les dependcies
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Storage from "local-storage";

class ControllerAuth {
  //  Register

  public Register = async (req: Request, res: Response, next: NextFunction) => {
    const {
      first_name,
      last_name,
      phone,
      address,
      email,
      password,
      confirm_password,
    } = req.body;

    if (
      first_name == "" ||
      last_name == "" ||
      phone == "" ||
      address == "" ||
      email == "" ||
      password == "" ||
      confirm_password == ""
    )
      return next(new HttpException(400, "Please fill all the fields"));

    if (
      typeof first_name !== "string" ||
      typeof last_name !== "number" ||
      typeof phone !== "string" ||
      typeof address !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof confirm_password !== "string"
    )
      return next(new HttpException(400, "Type The One Fields Not Correct"));

    const userExists = await db.User.findOne({ email });
    const phoneExists = await db.User.findOne({ phone });

    if (userExists) return next(new HttpException(400, "Email Déja Exists"));
    if (phoneExists) return next(new HttpException(400, "Phone Déja Exists"));

    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(password, salt);

    const role = await db.Role.aggregate([{ $match: { name: "client" } }]);

    const user = await db.User.create({
      first_name,
      last_name,
      phone,
      address,
      email,
      password: hash_pass,
      role: role[0]._id,
    });

    if (user) res.status(200).json({ user });
    if (!user) return next(new HttpException(400, "Invalid User Data"));
  };

  //  login

  public Login = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (body.email == "" || body.password == "") return res.json("Please Fill All The Fields");
    
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
            Storage("token", token);
            res.json({
              first_name: user.first_name,
              last_name: user.last_name,
              address: user.address,
              phone: user.phone,
              email: user.email,
              role: role.name,
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

    if (
      typeof last_password !== "string" ||
      typeof nouveau_password !== "string" ||
      typeof confirm_password !== "string"
    )
      return next(new HttpException(400, "Type The One Fields Not Correct"));

    const token: any = Storage("token");
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

  public Logout = async (req: Request, res: Response, next: NextFunction) => {
    // Storage.clear()
    // res.send('cle')
  };

  private generateToken = (id: string) => {
    const token = jwt.sign({ id }, env.Node_ENV, {
      expiresIn: "30d",
    });

    return token;
  };
}

const Auth = new ControllerAuth();

export default Auth;
