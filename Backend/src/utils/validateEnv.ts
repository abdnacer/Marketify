import { cleanEnv } from 'envalid'
import { str, port } from "envalid/dist/validators"

export default cleanEnv(process.env, {
  MONGO_URL: str(),
  PORT: port(),
  Node_ENV: str()
})