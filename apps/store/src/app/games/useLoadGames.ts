import type { Game } from '@nxegghead2/store/types';
import axios from 'axios';
import { useQuery } from 'react-query';

export const useLoadGames = () => useQuery<Game[], Error>(
  'games',
  async () => {
    const { data } = await axios.get('/api/games');
    return data;
  });
