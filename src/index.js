import "dotenv/config"
import express from "express"
import connectOnDB from "./config/dbConnect.js"

const app = express()
const { PORT } = process.env

async function startServer() {
  try {
    const connection = await connectOnDB()
    connection.on("error", (error) =>
      console.error(`${error} - FALHA AO TENTAR CONECTAR AO SERVIDOR`)
    )
    connection.once("open", () =>
      console.log("CONEXÃO COM SERVIDOR ESTABELECIDA")
    )

    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)
    })
  } catch (error) {
    console.error("Erro ao iniciar o servidor: ", error)
  }
}

startServer()
