import express from 'express'
import cors from 'cors'
import routes from './routes';

const app = express();
const port = 3333

// Permite que outro endereço acesse a API do db
app.use(cors())
app.use(express.json())
app.use(routes)


// Corpo (Requat body) => dados para criação ou atualização de um registro
// Route params (:id): Identificar qual recurso quer atualizar ou deletar 
// Query params: Paginação, filtros, ordenação, etc

// localhost:3333
app.listen(port);
console.log(`Backend executando na porta ${port}`);