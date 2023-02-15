import { InferSchemaType, model, Schema } from "mongoose"
import RoleBody from "../Interfaces/roleInterface"

const roleSchema = new Schema<RoleBody>({
  name: {
    type: String,
    required: true
  }
})

type Role = InferSchemaType<typeof roleSchema>

export default model<Role>("Roles", roleSchema)