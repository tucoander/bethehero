const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

/*
http://<rotas>:<porta>/<recurso>
http://localhost:3333/users

GET: Buscar/Listar uma informação
POST: Criar uma informação
PUT: Alterar uma informação
DELETE: Deletar uma informação

Tipos de parametros
Query params: parâmetros nomeados enviados na rotas após o "?" (filtros e paginação)
Route params: parâmetros utilizados para identificar recursos
Request Body: corpo da requisição utilizado para criar/alterar recursos

SQL: MySQL, SQLite, PostgreSQL, Oracle
NoSQL: MongoDB, CouchDB, etc

Tipo de Instalação
Driver: teremos que utilizar SELECT
Query Builder: teremos que utilizar javascript

*/