import { InferSchemaType, model, Schema } from 'mongoose'
import statusBody from '../Interfaces/statusCommandInterface'

const statussSchema = new Schema<statusBody>({
  name: {
    type: String,
    required: true
  }
})

type Status = InferSchemaType<typeof statussSchema>
export default model<Status>("Status", statussSchema)