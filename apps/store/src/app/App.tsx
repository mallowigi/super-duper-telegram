import {
  AppShell,
  Header,
  MantineProvider,
  Navbar,
  useMantineTheme,
  Text,
  Footer,
  MediaQuery,
  Aside,
  Burger
} from "@mantine/core";
import { useState, useCallback } from "react";

export const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const toggle = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <MantineProvider
      theme={{
        colorScheme: "light"
      }}
    >
      <AppShell
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside hiddenBreakpoint="sm" p="md" width={{ lg: 300, sm: 200 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        asideOffsetBreakpoint="sm"
        fixed
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{ alignItems: "center", display: "flex", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  color={theme.colors.gray[6]}
                  mr="xl"
                  onClick={toggle}
                  opened={opened}
                  size="sm"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
        navbar={
          <Navbar
            hidden={!opened}
            hiddenBreakpoint="sm"
            p="md"
            width={{ lg: 300, sm: 200 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        navbarOffsetBreakpoint="sm"
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0]
          }
        }}
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </MantineProvider>
  );
};
