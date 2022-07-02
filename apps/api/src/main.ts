/* eslint-disable no-console */
import * as express from 'express';

import { getAllGames, getGame } from './app';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/games', async (req, res) => {
  const allGames = await getAllGames();
  res.send(allGames);
});

app.get('/api/games/:id', (req, res) => {
  res.send(getGame(req.params.id));
});

const port = process.env.port ?? 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
