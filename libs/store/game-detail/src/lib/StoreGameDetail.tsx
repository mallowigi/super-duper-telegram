import { Card, Image, Group, Text, useMantineTheme, Skeleton } from '@mantine/core';
import { useLoadGame } from './useLoadGame';

export const StoreGameDetail = () => {
  const theme = useMantineTheme();
  const { game, loading } = useLoadGame();

  if (loading) {
    return <Skeleton />;
  }

  if (!game) {
    return null;
  }

  return (
    <Card
      key={game.id}
      m='sm'
      p='lg'
      shadow='sm'
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
        position='apart'
        style={{
          marginBottom: 5,
          marginTop: theme.spacing.sm,
        }}
      >
        <Text weight={500}>{game.name}</Text>
      </Group>

      <Text
        size='sm'
        style={{
          lineHeight: 1.5,
        }}
      >
        {game.description}
      </Text>
    </Card>
  );
};

