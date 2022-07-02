import {
  AppShell,
  Header,
  MantineProvider,
  Navbar,
  useMantineTheme,
  Text,
  Footer,
  MediaQuery,
  Burger
} from "@mantine/core";
import { useState, useCallback } from "react";
import { Contents } from "apps/store/src/app/Contents/Contents";

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
        <Contents />
      </AppShell>
    </MantineProvider>
  );
};
