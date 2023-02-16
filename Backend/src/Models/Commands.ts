import { InferSchemaType, model, Schema } from "mongoose"
import CommandBody from "../Interfaces/commandInterface"
const text = ""

const commandSchema = new Schema<CommandBody>({
  id_Produit: {
    type: String,
    ref: "Produits"
  },
  total_prix: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

type Commands = InferSchemaType<typeof commandSchema>

export default model<Commands>("Commands", commandSchema)