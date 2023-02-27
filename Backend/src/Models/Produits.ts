import { InferSchemaType, model, Schema } from "mongoose"
import ProduitBody from "../Interfaces/produitInterface"

const ProduitSchema = new Schema<ProduitBody>({
  name: {
    type: String,
    required: true
  },
  id_Categorie: {
    type: String,
    ref: "Categories"
  },
  id_Vendeur: {
    type: String,
    ref: "User"
  },
  images: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  }
})

type Produits = InferSchemaType<typeof ProduitSchema>

export default model<Produits>("Produits", ProduitSchema)