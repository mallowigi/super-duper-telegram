import { MantineProvider, AppShell, useMantineTheme } from '@mantine/core';
import { GameHeader } from '@nxegghead2/store/shared';
import { ThemeProvider } from 'styled-components';
import { Contents } from '@nxegghead2/store/app';
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
            <Contents />
          </AppShell>
        </ThemeProvider>
      </MantineProvider>

      <Routes>
        <Route
          element={<StoreGameDetail />}
          path='/game/:id'
        />
      </Routes>
    </>
  );
};
