import { Flow } from "./containers/flow/Flow";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

const theme = createTheme();

const globalStyles = (
  <GlobalStyles
    styles={{
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        backgroundColor: "#f0f0f0",
      },
    }}
  />
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <Flow />
    </ThemeProvider>
  );
};

export default App;
