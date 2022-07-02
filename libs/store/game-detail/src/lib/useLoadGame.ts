import { useState, useEffect } from 'react';
import type { Game } from '@nxegghead2/store/types';
import { useParams } from 'react-router-dom';

export const useLoadGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Game>();
  const [loading, setLoading] = useState(true);

  const fetchGame = async () => {
    const response = await fetch(`/api/games/${id}`);
    const json = await response.json();
    setGame(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchGame();
  }, []);

  return {
    game,
    loading,
  };
};
