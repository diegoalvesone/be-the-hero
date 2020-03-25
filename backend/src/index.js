const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json ());
app.use(routes);

/**
 * Rota / Recursão
 */
/**
 * Métodos HTTP:
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
  * Tipos de Parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição utilizado para criar ou alterar recursos
  */
/**
  * SQL:
  * NoSql:
  */

/**
   * Driver: SELECT * FROM users;
   * Query Builder: table('users').select('*').where()
   */



app.listen(3333);