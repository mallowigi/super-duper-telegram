import { MantineProvider, AppShell, useMantineTheme } from '@mantine/core';
import { GameHeader } from '@nxegghead2/store/shared';
import { Contents } from 'apps/store/src/app/Contents/Contents';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const theme = useMantineTheme();
  return (
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
  );
};
