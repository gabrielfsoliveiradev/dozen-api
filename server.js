import "dotenv/config"
import app from "./src/app.js";

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)
})