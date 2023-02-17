import { InferSchemaType, model, mongo, Schema } from "mongoose"
import UserBody from "../Interfaces/userInterface"

const UserSchema = new Schema<UserBody>({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  role: {
    type: String,
    ref: "Role"
  }
})

type Users = InferSchemaType<typeof UserSchema>

export default model<Users>("Users", UserSchema)