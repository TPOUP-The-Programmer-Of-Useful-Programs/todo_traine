const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
app.use (express.json());
app.use(cors());

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'todo_app',
    user: 'postgres',
    password: 'root',
})

pool.connect().then(() => {
    console.log('Conectado ao banco de dados PostgresSQL');
}).catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

/* GET - LISTAR TAREFAS */
app.get('/tarefas', async function (req, res){
   const { rows: data } = await pool.query('SELECT * FROM tasks');

    res.status(200). json({ data });
})

/* POST - CRIAR TAREFA */
app.post('/tarefas', function (req, res){
    res.json([]);
})

app.put('/tarefas', function (req, res){
    res.json([]);
})

app.delete('/tarefas', function (req, res){
    res.json([]);
})

app.listen(3000, function () {
    console.log('server is running on port 3000')
});