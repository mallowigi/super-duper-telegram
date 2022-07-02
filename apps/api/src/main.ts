import * as express from 'express';
import { getAllGames, getGame } from './app/games.repo';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/games', (req, res) => {
  res.send(getAllGames());
});

app.get('/api/games/:id', (req, res) => {
  res.send(getGame(req.params.id));
});

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const port = process.env.port ?? 3333;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}/api`);
});
// eslint-disable-next-line no-console
server.on('error', console.error);
