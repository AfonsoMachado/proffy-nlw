import knex from 'knex'
import path from 'path'

//Migrations: controlam a versão do banco de dados

// Definindo parâmetros do knex
const db = knex({
  client: 'sqlite3',
  connection: {
    // Cria um arquivo dentro da pasta database
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
})

export default db;