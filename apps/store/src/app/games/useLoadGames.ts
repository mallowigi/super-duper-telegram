import { useState, useEffect, useCallback } from 'react';
import type { Game } from '@nxegghead2/store/types';

export const useLoadGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = useCallback(async () => {
    const response = await fetch('/api/games');
    const json = await response.json();
    setGames(json);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!games.length) {
      console.log('useLoadGames: useEffect');
      fetchGames();
    }
  }, []);

  return {
    games,
    loading,
  };
};
