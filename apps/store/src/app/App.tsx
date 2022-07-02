import { MantineProvider, AppShell, useMantineTheme } from '@mantine/core';
import { GameHeader } from '@nxegghead2/store/shared';
import { ThemeProvider } from 'styled-components';
import { GamesList } from './games';
import { Route, Routes } from 'react-router-dom';
import { GameDetailDrawer } from 'apps/store/src/app/games/GameDetailDrawer';

export const App = () => {
  const theme = useMantineTheme();
  return (
    <>
      <MantineProvider
        theme={{
          colorScheme: 'light',
          fontFamily: 'Asap, Nokora, Helvetica Neue, sans-serif',
          headings: {
            fontFamily: 'Doppio One, Palanquin, sans-serif',
          },
        }}
        withNormalizeCSS
      >
        <ThemeProvider theme={theme}>
          <AppShell header={<GameHeader />}>
            <GamesList />
          </AppShell>
        </ThemeProvider>
      </MantineProvider>

      <Routes>
        <Route element={<>.</>} path='/' />

        <Route
          element={<GameDetailDrawer />}
          path='/game/:id'
        />
      </Routes>
    </>
  );
};
