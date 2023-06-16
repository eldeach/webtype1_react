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
    rootsite: {
      main: '#0971f1',
      darker: '#053e85',
      contrastText: '#fff',
    },
    info: {
      main: '#0971f1',
      darker: '#053e85',
      contrastText: '#fff',
    },
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    cdms: {
      main: '#3f50b5',
      darker: '#002884',
      contrastText: '#fff',
    },
    vmp: {
      main: '#0971f1',
      darker: '#053e85',
      contrastText: '#fff',
    },
    pqr: {
      main: '#0971f1',
      darker: '#053e85',
      contrastText: '#fff',
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