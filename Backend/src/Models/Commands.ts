import { InferSchemaType, model, Schema } from "mongoose"
import CommandBody from "../Interfaces/commandInterface"

const commandSchema = new Schema<CommandBody>({
  id_Produit: {
    type: String,
    ref: "Produits"
  },
  id_Vendeur: {
    type: String,
    ref: "Users"
  },
  id_Client: {
    type: String,
    ref: "Users"
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