import {
  Badge,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';
import styled from 'styled-components';
import { useCallback } from 'react';
import type { Game } from '@nxegghead2/store/app';
import { getAllGames } from '@nxegghead2/store/app';
import { formatRating } from '@nxegghead2/store/formatters';

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Contents = () => {
  const games = getAllGames();
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const getRating = useCallback((game: Game) => formatRating(game.rating), []);

  return (
    <Root>
      {games.map((game) => (
        <Card key={game.id} m="sm" p="lg" shadow="sm" style={{ flex: 1 }}>
          <Card.Section>
            <Image alt={game.name} height={160} src={game.image} />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>{game.name}</Text>
            <Badge color="pink" variant="light">
              Rating: {getRating(game)}
            </Badge>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {game.description}
          </Text>
        </Card>
      ))}
    </Root>
  );
};
