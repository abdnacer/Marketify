import mongoose from "mongoose"
import User from "./User"
import Role from "./Role"
import Categories from "./Categories"
import Commands from "./Commands"
import Produits from "./Produits"
import DbBody from "../Interfaces/dbInterface"
import RoleBody from "../Interfaces/roleInterface"

mongoose.Promise = global.Promise

const db: DbBody = {
  mongoose, User,
  Role,
  Categories,
  Commands,
  Produits
}

db.Role.estimatedDocumentCount((err: string, count: number) => {
  if (!err && count === 0) {
    const RoleToInsert: RoleBody[] = [
      { name: "admin" },
      { name: "client" },
      { name: "vendeur" },
      { name: "livreur" }
    ]
    Role.insertMany(RoleToInsert, (err, Role) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("added Role to roles collection", Role)
      }
    });
  }
})

export default db