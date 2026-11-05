const express = require('express');
const { pool, iniciarBanco } = require('./db');
const { validarDespesa } = require('./validar');

const app = express();
app.use(express.json());

app.get('/saude', (req, res) => res.json({ status: 'ok' }));

app.post('/despesas', async (req, res) => {
  const erro = validarDespesa(req.body);
  if (erro) return res.status(400).json({ erro });

  const { descricao, valor, categoria, data } = req.body;
  const r = await pool.query(
    'INSERT INTO despesas (descricao, valor, categoria, data) VALUES ($1, $2, $3, $4) RETURNING *',
    [descricao, valor, categoria, data]
  );
  res.status(201).json(r.rows[0]);
});

app.get('/despesas', async (req, res) => {
  const r = await pool.query('SELECT * FROM despesas ORDER BY data DESC');
  res.json(r.rows);
});

iniciarBanco()
  .then(() => app.listen(3000, () => console.log('API rodando na porta 3000')))
  .catch((e) => { console.error('Erro ao iniciar o banco:', e); process.exit(1); });