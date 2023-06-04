
// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Libaray] Material UI
import { ThemeProvider } from '@mui/material/styles';

// ======================================================================================== [Import Component] js - AppBar
import WebBasketAppBar from './WebBasket/AppBar/WebBasketAppBar'
import CdmsAppBar from './CDMS/AppBar/CdmsAppBar'
import VmpAppBar from './VMP/AppBar/VmpAppBar'
import PqrAppBar from './PQR/AppBar/PqrAppBar'

// ======================================================================================== [Import Component] js
import FirstImpression from './WebBasket/FirstImpression/FirstImpression'
import CdmsFrontPage from './CDMS/FrontPage/CdmsFrontPage'
import VmpFrontPage from './VMP/FrontPage/VmpFrontPage'
import PqrFrontPage from './PQR/FrontPage/PqrFrontPage'



import GlobalTheme from './WebBasket/Themes/GlobalTheme';

// ======================================================================================== [Import Component] CSS
import './App.css';





function App() {

  const location = useLocation();
  let [appVar,setAppVar] = useState("/");

  useEffect(() => {
    if(location.pathname.indexOf("/cdms")!==-1) setAppVar("/cdms")
    else if(location.pathname.indexOf("/vmp")!==-1) setAppVar("/vmp")
    else if(location.pathname.indexOf("/pqr")!==-1) setAppVar("/pqr")
    else setAppVar("/")
  }, [location]);



  return (
    <ThemeProvider theme={GlobalTheme}>
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
        appVar === "/" ?  <WebBasketAppBar/> : <div></div>
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
