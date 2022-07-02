import styled from 'styled-components';
import { getAllGames } from '@nxegghead2/store/app';
import { GameCard } from 'apps/store/src/app/Contents/GameCard';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Contents = () => {
  const games = getAllGames();

  return (
    <Root>
      {games.map(game => (<GameCard game={game} key={game.id} />))}
    </Root>
  );
};
