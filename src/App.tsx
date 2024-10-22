import { createTheme, ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { Main } from './features/main/Main';

const theme = createTheme();
const globalStyles = <GlobalStyles styles={{ '*': { margin: 0, padding: 0, boxSizing: 'border-box' } }} />;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <Main />
    </ThemeProvider>
  );
};

export default App;
