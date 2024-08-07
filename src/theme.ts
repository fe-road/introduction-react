import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
