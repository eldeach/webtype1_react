// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ThemeProvider } from '@mui/material/styles';

// ======================================================================================== [Import Component] js
// App Bar
import WebFrameAppBar from './WebServiceFrame/AppBar/WebFrameAppBar'
import CdmsAppBar from './CDMS/AppBar/CdmsAppBar'
import VmpAppBar from './VMP/AppBar/VmpAppBar'
import PqrAppBar from './PQR/AppBar/PqrAppBar'
// rest
import FirstImpression from './WebServiceFrame/FirstImpression/FirstImpression'
import CdmsFrontPage from './CDMS/FrontPage/CdmsFrontPage'
import VmpFrontPage from './VMP/FrontPage/VmpFrontPage'
import PqrFrontPage from './PQR/FrontPage/PqrFrontPage'
import globalTheme from './WebServiceFrame/Themes/globalTheme';
import setCookies from './WebServiceFrame/Language/Form/Functions/setCookies'

// ======================================================================================== [Import Component] CSS
import './App.css';

function App() {
  const location = useLocation();
  let [appVar,setAppVar] = useState("/");

  useEffect(() => {
    if(!cookies.load('site-lang')){
      setCookies('eng')
    }

    if(location.pathname.indexOf("/cdms")!==-1) setAppVar("/cdms")
    else if(location.pathname.indexOf("/vmp")!==-1) setAppVar("/vmp")
    else if(location.pathname.indexOf("/pqr")!==-1) setAppVar("/pqr")
    else setAppVar("/")
  }, [location]);



  return (
    <ThemeProvider theme={globalTheme}>
    <div className="App">
      {
        appVar === "/cdms" ? <CdmsAppBar/> : <div></div>
      }
      {
        appVar === "/vmp" ? <VmpAppBar/> : <div></div>
      }
      {
        appVar === "/pqr" ? <PqrAppBar/> : <div></div>
      }
            {
        appVar === "/" ?  <WebFrameAppBar/> : <div></div>
      }
      
      
      <Routes>
        <Route path='/' element={<FirstImpression/>}/>

        <Route path='/cdms' element={<CdmsFrontPage/>}/>

        <Route path='/vmp' element={<VmpFrontPage/>}/>

        <Route path='/pqr' element={<PqrFrontPage/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
