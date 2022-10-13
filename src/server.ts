import { app } from "."

const PORT = 3333

app.listen(PORT, () => {
  console.log(`App listen at: http://localhost:${PORT}`)
})