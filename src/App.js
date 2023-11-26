// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ThemeProvider } from '@mui/material/styles';

// ======================================================================================== [Import Component] js
import LoginButton from './RootSite/Forms/ButtonLogin/LoginButton';
import LangButton from './RootSite/Forms/ButtonLang/LangButton';
// App Bar
import AppBarFactory from './RootSite/GlobalObject/Factory/AppBar/AppBarFactory'
//Config
import configAppBars from './RootSite/GlobalObject/Configure/AppBar/configAppBars';
// Root Site Component
import globalTheme from './RootSite/GlobalObject/Themes/globalTheme';
import FirstImpression from './RootSite/FirstImpression/FirstImpression'
// Root Site Forms
import AddUser from './RootSite/Forms/Users/AddUser/AddUser';
import ManageUserForm from './RootSite/Forms/Users/ManageUser/ManageUserForm';
// Child Site Component
import CdmsFrontPage from './ChildSite/CDMS/FrontPage/CdmsFrontPage'
import VmpFrontPage from './ChildSite/VMP/FrontPage/VmpFrontPage'
import PqrFrontPage from './ChildSite/PQR/FrontPage/PqrFrontPage'

// ======================================================================================== [Import Component] CSS
import './App.css';

function App() {
  const location = useLocation();
  let [appBarName, setAppBarName] = useState("rootsite");

  useEffect(() => {
    if (!cookies.load('site-lang')) {
      cookies.save('site-lang', 'eng', { path: '/' })
    }

    Object.keys(configAppBars).map(function (element) {
      if (location.pathname === "/".concat(element)) setAppBarName(element)
    })
    if (location.pathname === "/") setAppBarName("rootsite")
  }, [location]);

  return (
    <ThemeProvider theme={globalTheme}>
      <div className="App">

        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="rootsite" position="fixed">
            <Toolbar variant="dense">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                {configAppBars[props.appBarName].title}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>

              </Box>
              <LangButton />
              <LoginButton />
            </Toolbar>
          </AppBar>
        </Box>
        {/* <AppBarFactory appBarName={appBarName} pathName={location.pathname}/> */}
        <div style={{ height: '60px' }} />

        <Routes>
          <Route path='/' element={<FirstImpression />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/manageuser' element={<ManageUserForm />} />

          <Route path='/cdms' element={<CdmsFrontPage />} />
          <Route path='/vmp' element={<VmpFrontPage />} />
          <Route path='/pqr' element={<PqrFrontPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}



export default App;
