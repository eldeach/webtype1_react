// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
// ======================================================================================== [Import Libaray] Material UI
import { ThemeProvider } from '@mui/material/styles';

// ======================================================================================== [Import Component] js - AppBar
import WebFrameAppBar from './WebServiceFrame/AppBar/WebFrameAppBar'
import CdmsAppBar from './CDMS/AppBar/CdmsAppBar'
import VmpAppBar from './VMP/AppBar/VmpAppBar'
import PqrAppBar from './PQR/AppBar/PqrAppBar'

// ======================================================================================== [Import Component] js
import FirstImpression from './WebServiceFrame/FirstImpression/FirstImpression'
import CdmsFrontPage from './CDMS/FrontPage/CdmsFrontPage'
import VmpFrontPage from './VMP/FrontPage/VmpFrontPage'
import PqrFrontPage from './PQR/FrontPage/PqrFrontPage'
import globalTheme from './WebServiceFrame/Themes/globalTheme';
import { setMsgCodeBook } from "./../store.js" // redux js 임포트
// ======================================================================================== [Import Component] CSS
import './App.css';

function App() {
  //========================================================== [변수, 객체 선언] 선택된 정보 redux 저장용
  let rdx = useSelector((state) => { return state } )
  let dispatch = useDispatch();

  const location = useLocation();
  let [appVar,setAppVar] = useState("/");

  useEffect(() => {
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
