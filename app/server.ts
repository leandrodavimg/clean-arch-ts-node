import { app } from './app'
import { port } from './config/env'

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})