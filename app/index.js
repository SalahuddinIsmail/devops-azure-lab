const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db', // هذا هو اسم الخدمة في docker-compose.yml
  database: 'devopsdb',
  password: 'postgres',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('DevOps Azure Lab running 🚀');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

