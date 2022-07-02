import { MantineProvider, AppShell, useMantineTheme } from '@mantine/core';
import { GameHeader } from '@nxegghead2/store/shared';
import { ThemeProvider } from 'styled-components';
import { GamesList } from './games';
import { Route, Routes } from 'react-router-dom';
import { GameDetailDrawer } from './games/GameDetailDrawer';
import { QueryClient, QueryClientProvider } from 'react-query';

export const App = () => {
  const theme = useMantineTheme();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
