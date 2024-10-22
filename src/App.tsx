import { Flow } from "./features/flow/Flow";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

const theme = createTheme();

const globalStyles = (
  <GlobalStyles
    styles={{ "*": { margin: 0, padding: 0, boxSizing: "border-box" } }}
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
