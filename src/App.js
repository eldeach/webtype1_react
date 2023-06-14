// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Box } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';

// ======================================================================================== [Import Component] js
// App Bar
import SiteAppBar from './RootSite/AppBar/SiteAppBar'
// App Bar Drawer List

// rest
import globalTheme from './RootSite/Themes/globalTheme';
import FirstImpression from './RootSite/FirstImpression/FirstImpression'
import CdmsFrontPage from './CDMS/FrontPage/CdmsFrontPage'
import VmpFrontPage from './VMP/FrontPage/VmpFrontPage'
import PqrFrontPage from './PQR/FrontPage/PqrFrontPage'
import setCookies from './RootSite/Language/Form/Functions/setCookies'

// ======================================================================================== [Import Component] CSS
import './App.css';

function App() {
  const location = useLocation();
  let [appBar,setAppBar] = useState("siteroot");

  useEffect(() => {
    if(!cookies.load('site-lang')){
      setCookies('eng')
    }

    if(location.pathname.indexOf("/cdms")!==-1) setAppBar("cdms")
    else if(location.pathname.indexOf("/vmp")!==-1) setAppBar("vmp")
    else if(location.pathname.indexOf("/pqr")!==-1) setAppBar("pqr")
    else setAppBar("siteroot")
  }, [location]);

  return (
    <ThemeProvider theme={globalTheme}>
    <div className="App">

      <SiteAppBar appBar={appBar}/>

      
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
