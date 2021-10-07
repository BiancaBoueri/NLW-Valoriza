import "reflect-metadata"

import express, { Request, Response, NextFunction } from "express" // biblioteca essencial
import "express-async-errors";

import cors from "cors";

import { router } from "./routes"
import "./database" //por definição está importando o index.ts

const app = express();

app.use(cors()); // pra adicionar um frontend.

app.use(express.json()); //middleware, entre a req e a resp

app.use(router); //primeiro as rotas

//tratar exceções usando middleware:::

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })

})

app.listen(3000, () => console.log("Server is running"));

