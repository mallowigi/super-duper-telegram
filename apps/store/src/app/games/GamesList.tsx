import styled from 'styled-components';
import { GameCard } from './GameCard';
import { useLoadGames } from './useLoadGames';
import { Loader } from '@mantine/core';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GamesList = () => {
  const { games, loading } = useLoadGames();
  if (loading) {
    return <Loader />;
  }

  return (
    <Root>
      {games.map(game => (<GameCard game={game} key={game.id} />))}
    </Root>
  );
};
