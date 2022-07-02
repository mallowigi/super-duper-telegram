export type Game = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
};

const games: Game[] = [
  {
    description:
      'Help your bug family claim the best real estate in a spilled can of beans.',
    id: 'settlers-in-the-can',
    image: 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
    name: 'Settlers in the Can',
    price: 35,
    rating: Math.random(),
  },
  {
    description: 'A circular game of Chess that you can eat as you play.',
    id: 'chess-pie',
    image: 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
    name: 'Chess Pie',
    price: 15,
    rating: Math.random(),
  },
  {
    description: 'A cat grooming contest goes horribly wrong.',
    id: 'purrfection',
    image: 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
    name: 'Purrfection',
    price: 45,
    rating: Math.random(),
  },
];

export const getAllGames = (): Game[] => games;

export const getGame = (id: string): Game | undefined =>
  games.find((game) => game.id === id);
