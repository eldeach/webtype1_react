import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  typography: {
    fontFamily : 'sans-serif',
    button : {
      textTransform : 'none'
    },
  },  
  status : {
    danger : '#e53e3e',
  },
  palette : {
    sys1 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    sys2 : {
      main : '#3f50b5',
      darker : '#002884',
      contrastText : '#fff',
    },
    sys3 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    sys4 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    sys5 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    sys6 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    sys7 : {
      main : '#0971f1',
      darker : '#053e85',
      contrastText : '#fff',
    },
    
    white :{
      main : '#fff',
    },
    denied : {
      main : '#e53e3e',
    }
  },
});

export default globalTheme;