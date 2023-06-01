
import './App.css';
import { Routes, Route, useNavigate, useLocation  } from 'react-router-dom';

// ======================================================================================== [컴포넌트 Import] AppBar
import FrontAppBar from './AppBar/FrontAppBar'
import CdmsAppBar from './AppBar/CdmsAppBar'
import VmpAppBar from './AppBar/VmpAppBar'
import PqrAppBar from './AppBar/PqrAppBar'

// ======================================================================================== [컴포넌트 Import]
import FrontPage from './FrontPage/FrontPage'
import CdmsMain from './CDMS/CdmsMain'
import Docs from './CDMS/Docs'
import VmpMain from './VMP/VmpMain'
import PqrMain from './PQR/PqrMain'
import { useEffect, useState } from 'react';

function App() {

  const location = useLocation();
  let [appVar,setAppVar] = useState("/");

  useEffect(() => {
    if(location.pathname.indexOf("/cdms")!=-1) setAppVar("/cdms")
    else if(location.pathname.indexOf("/vmp")!=-1) setAppVar("/vmp")
    else if(location.pathname.indexOf("/pqr")!=-1) setAppVar("/pqr")
    else setAppVar("/")
  }, [location]);



  return (
    <div className="App">
      {
        appVar == "/cdms" ? <CdmsAppBar/> : <div></div>
      }
      {
        appVar == "/vmp" ? <VmpAppBar/> : <div></div>
      }
      {
        appVar == "/pqr" ? <PqrAppBar/> : <div></div>
      }
            {
        appVar == "/" ?  <FrontAppBar/> : <div></div>
      }
      
      
      <Routes>
        <Route path='/' element={<FrontPage/>}/>

        <Route path='/cdms' element={<CdmsMain/>}/>
        <Route path='/cdms/docs' element={<Docs/>}/>

        <Route path='/vmp' element={<VmpMain/>}/>

        <Route path='/pqr' element={<PqrMain/>}/>
      </Routes>
    </div>
  );
}

export default App;
