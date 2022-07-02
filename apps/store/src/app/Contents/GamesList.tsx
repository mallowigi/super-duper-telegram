import styled from 'styled-components';
import { GameCard } from './GameCard';
import { getAllGames } from '@nxegghead2/store/api';
import type { Game } from '@nxegghead2/store/types';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GamesList = () => {
  const games: Game[] = getAllGames();

  return (
    <Root>
      {games.map(game => (<GameCard game={game} key={game.id} />))}
    </Root>
  );
};
