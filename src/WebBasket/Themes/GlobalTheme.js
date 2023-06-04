import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
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

  export default GlobalTheme;