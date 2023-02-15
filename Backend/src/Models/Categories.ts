import { InferSchemaType, model, Schema} from 'mongoose'
import CategoriesBody from '../Interfaces/categorieInterface'

const categoriesSchema = new Schema<CategoriesBody>({
  name: {
    type: String,
    required: true
  }
})

type Categories = InferSchemaType<typeof categoriesSchema>

export default model<Categories>("Categories", categoriesSchema)