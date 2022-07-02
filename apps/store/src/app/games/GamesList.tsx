import styled from 'styled-components';
import { GameCard } from './GameCard';
import { useLoadGames } from './useLoadGames';
import { Loader } from '@mantine/core';
import { memo } from 'react';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GamesList = memo(() => {
  const { games, loading } = useLoadGames();
  if (loading) {
    console.log('loader');
    return <Loader />;
  }

  return (
    <Root>
      {games.map(game => (<GameCard game={game} key={game.id} />))}
    </Root>
  );
});
