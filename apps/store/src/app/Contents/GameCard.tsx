import { Card, Image, Group, Text, Badge, useMantineTheme } from '@mantine/core';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Game } from '@nxegghead2/store/app';
import { formatRating } from '@nxegghead2/store/formatters';

type Props = {
  game: Game;
}

export const GameCard: FC<Props> = ({ game }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const navigateToGame = useCallback(() => {
    navigate(`/game/${game.id}`);
  }, [game]);
  const getRating = useCallback((game: Game) => formatRating(game.rating), []);

  return <Card
    key={game.id}
    m="sm"
    onClick={navigateToGame}
    p="lg"
    shadow="sm"
    style={{ flex: 1 }}
  >
    <Card.Section>
      <Image
        alt={game.name}
        height={160}
        src={game.image}
      />
    </Card.Section>

    <Group
      position="apart"
      style={{
        marginBottom: 5,
        marginTop: theme.spacing.sm,
      }}
    >
      <Text weight={500}>{game.name}</Text>

      <Badge
        color="pink"
        variant="light"
      >
        Rating:

        {` ${getRating(game)}`}
      </Badge>
    </Group>

    <Text
      size="sm"
      style={{
        color: secondaryColor,
        lineHeight: 1.5,
      }}
    >
      {game.description}
    </Text>
  </Card>;
};
