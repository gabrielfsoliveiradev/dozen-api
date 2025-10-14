import express from "express";
import connectOnDB from "./config/dbConnect.js";

const app = express()

const connection = await connectOnDB()
connection.on("error", (error) => console.error(`${error} - FALHA AO TENTAR CONECTAR AO SERVIDOR`))
connection.once("open", () => console.log("CONEXÃO COM SERVIDOR ESTABELECIDA"))

export default app