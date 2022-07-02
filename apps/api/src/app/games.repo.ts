import axios from 'axios';
import type { GameDao } from './game.dao';

const { RAWG_API_KEY } = process.env;

export const getAllGames = async () => {
  const games = await axios({
    method: 'get',
    url: `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`,
  });
  return games.data?.results?.map((game: GameDao) => ({
    description: '',
    id: game.id,
    image: game.background_image,
    name: game.name,
    price: 0,
    rating: game.rating,
  }));
};

export const getGame = async (id: string) => {
  const games = await axios({
    method: 'get',
    url: `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`,
  });
  return games;
};
