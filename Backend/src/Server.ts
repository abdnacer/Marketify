import app from './App'
import env from './utils/validateEnv'

import './Config/db'

const port = env.PORT || 8888

app.listen(port, () => console.log(`server is runing on port ${port}`))

