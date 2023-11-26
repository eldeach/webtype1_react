// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography, Divider, IconButton, Drawer } from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
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

  const [openMenu, setOpenMenu] = useState(0);
  const handleMenuClose = () => setOpenMenu(0);

  const [pageTitle, setPageTitle] = useState('')
  const handlePageTitle = (titleText) => setPageTitle(titleText)
  
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
              <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={()=>setOpenMenu(1)}>
                <MenuIcon />
              </IconButton>
              <div style={{fontSize:'18px'}}>{pageTitle}</div>
              <Box sx={{ flexGrow: 1 }}>

              </Box>
              <Button variant="outlined" color = "white" size="small">{"CDMS"}</Button>
              <LangButton />
              <LoginButton />
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer anchor={'left'} open={(openMenu === 1)} onClose={handleMenuClose}>
          <Box sx={{ width: 250}} role="presentation" onClick={handleMenuClose} onKeyDown={handleMenuClose}>
            
          </Box>
        </Drawer>
        <div style={{ height: '60px' }} />

        <Routes>
          <Route path='/' element={<FirstImpression handlePageTitle={handlePageTitle}/>} />
          <Route path='/adduser' element={<AddUser handlePageTitle={handlePageTitle}/>} />
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
