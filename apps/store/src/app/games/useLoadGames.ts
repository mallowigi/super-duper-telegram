import { useState, useEffect } from 'react';
import type { Game } from '@nxegghead2/store/types';

export const useLoadGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    const response = await fetch('/api/games');
    const json = await response.json();
    setGames(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return {
    games,
    loading,
  };
};
