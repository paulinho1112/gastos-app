const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function iniciarBanco() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS despesas (
      id SERIAL PRIMARY KEY,
      descricao TEXT NOT NULL,
      valor NUMERIC(10,2) NOT NULL,
      categoria TEXT NOT NULL,
      data DATE NOT NULL
    )
  `);
}

module.exports = { pool, iniciarBanco };