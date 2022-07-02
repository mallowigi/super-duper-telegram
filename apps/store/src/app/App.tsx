import { MantineProvider, AppShell, useMantineTheme, Text } from '@mantine/core';
import { GameHeader } from '@nxegghead2/store/shared';
import { ThemeProvider } from 'styled-components';
import { GamesList } from '@nxegghead2/store/app';
import { Route, Routes } from 'react-router-dom';
import { StoreGameDetail } from '@nxegghead2/store/game-detail';

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
        <Route element={<Text>Please select a game to view it's details</Text>} path='/' />

        <Route
          element={<StoreGameDetail />}
          path='/game/:id'
        />
      </Routes>
    </>
  );
};
