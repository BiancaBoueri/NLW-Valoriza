import "reflect-metadata"

import express from "express" // biblioteca essencial
import { router } from "./routes"
import "./database" //por definição está importando o index.ts

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));




/*

app.get("/test", (request, response) => {
  return response.send("Hello world!")
}) //navegador só faz requisições do tipo get

app.post("/test", (request, response) => {
  const { name, email } = request.body

  //fez o processamento

  return response.json({ name, email, "is_active": true })
})


//import express from "express";
//@types/express
//const app = express()

//inicializar servidor:
//http://localhost:3000
//app.listen(3000, () => console.log("Server is running aaaaaaaaa"));

/*
métodos:

GET buscar informação
POST inserir informação
PUT alterar informação
DELETE remover informação
PATCH alterar informação específica
*/

// o browser só faz requisições get. => insomnia.


/*
parâmetros:

route => /produtos/623872837 => obrigatório
query => /produtos?name=teclado&description=tecladobom& => não obrigatório
body => (post, put, patch) =>
{
  "name": "teclado",
  "description": "tecladobom"
}

*/

//request => info entrando , response => info saindo

//criar rota:
/*app.get("/test", (request, response) => {
  return response.send("Hello world!");
})

app.post("/test-post", (request, response) => {
  return response.send("POSTeeeeee");
});
*/

/*

Banco de dados:

drivers nativos => tem q ter conhecimento de SQL

query builders => knex.js

object relacional maps => frameworks/bibliotecas, ajudam no mapeamento entidade-obj
vamos usar esse.

*/


// conhecimentos: ts/js, sql básico, git