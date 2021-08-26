// routes
import Router from './routes';
// theme
// import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { Box, createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

// ----------------------------------------------------------------------

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <ThemeConfig> */}
      <CssBaseline />
      <ScrollToTop />
      <Router />
      {/* </ThemeConfig> */}
    </ThemeProvider >
  );
}
