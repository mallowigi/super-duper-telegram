import styled from 'styled-components';
import { GameCard } from './GameCard';
import { Loader } from '@mantine/core';
import { memo } from 'react';
import { useLoadGames } from './useLoadGames';
import { ErrorPage } from '@nxegghead2/store/shared';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GamesList = memo(() => {
  const { error, data: games, isLoading } = useLoadGames();
  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Root>
      {games?.map(game => (<GameCard game={game} key={game.id} />))}
    </Root>
  );
});
