import { Button, Drawer, Group, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { StoreGameDetail } from '@nxegghead2/store/game-detail';

export const GameDetailDrawer = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const goHome = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      navigate('/');
    }, 300);
  }, [navigate]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Drawer
        onClose={goHome}
        opened={isOpen}
        overlayBlur={3}
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        padding='xl'
        position='right'
        size='xl'
      >
        <StoreGameDetail />
      </Drawer>

      <Group position='center'>
        <Button onClick={goHome}>Open Drawer</Button>
      </Group>
    </>
  );
};
