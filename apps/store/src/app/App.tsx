import { MantineProvider } from "@mantine/core";

export const App = () => (
  <MantineProvider
    theme={{
      // Override any other properties from default theme
      fontFamily: "Open Sans, sans serif",
      spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 }
    }}
  >
    <div className="app">Hi</div>
  </MantineProvider>
);
