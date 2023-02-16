import mongoose from "mongoose"
import User from "../Models/User";
import Role from "../Models/Role";
import Categories from "../Models/Categories";
import Commands from "../Models/Commands";
import Produits from "../Models/Produits";

interface DbBody {
  mongoose: typeof mongoose;
  User: typeof User;
  Role: typeof Role;
  Categories: typeof Categories;
  Commands: typeof Commands;
  Produits: typeof Produits;
}

export default DbBody