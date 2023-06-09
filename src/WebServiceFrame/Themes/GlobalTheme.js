import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    button: {
      textTransform: 'none'
    },
  },  
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
    white:{
      main: '#fff',
    }
  },
});

export default globalTheme;