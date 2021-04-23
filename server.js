/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

const staticFolder = 'public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use(express.static(staticFolder));

async function bootServer() {
  try {
    app.listen(PORT, () => {
      const mysql = await db.sequelizeDB;
      await mysql.sync();
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
