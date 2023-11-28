// ======================================================================================== [Import Libaray]
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Drawer } from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';

// ======================================================================================== [Import Component] js
import LoginButton from './System/Forms/ButtonLogin/LoginButton';
import LangButton from './System/Forms/ButtonLang/LangButton';

// System Component
import GoSystemButton from './System/Forms/ButtonGoSystem/GoSystemButton';
import menuConfig from './System/SystemMenu/menuConfig';
import systemThemes from './System/systemThemes';
// System Redirect page
import NoAuthPage from './System/RedirectPage/NoAuthPage/NoAuthPage';
import SessionExpired from './System/RedirectPage/SessionExpired/SessionExpired';

// Sys 1 Pages
import AddUser from './MotherSite/Forms/Users/AddUser/AddUser';

// ======================================================================================== [Import Component] CSS
import './App.css';

function App() {

  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClose = () => setOpenMenu(false);

  const [pageTitle, setPageTitle] = useState('')
  const handlePageTitle = (titleText) => setPageTitle(titleText)

  const [systemCode, setSystemCode] = useState('sys1')
  const handleSystemCode = (codeValue) => setSystemCode(codeValue)

  useEffect(() => {
    if (!cookies.load('site-lang')) {
      cookies.save('site-lang', 'eng', { path: '/' })
    }
  },[][location]);

  return (
    <ThemeProvider theme={systemThemes}>
      <div className="App">

        <Box sx={{ flexGrow: 1 }}>
          <AppBar color={systemCode} position="fixed">
            <Toolbar variant="dense">
              <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={()=>setOpenMenu(true)}>
                <MenuIcon />
              </IconButton>
              <div style={{fontSize:'18px'}}>{pageTitle}</div>
              <Box sx={{ flexGrow: 1 }}>

              </Box>
              <div style={{fontSize:'18px', marginRight:'20px', fontWeight:'bolder'}}>{menuConfig[systemCode].name}</div>
              <GoSystemButton handlePageTitle={handlePageTitle} handleSystemCode={handleSystemCode}/>
              <LangButton />
              <LoginButton />
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer anchor={'left'} open={(openMenu)} onClose={handleMenuClose}>
          <Box sx={{ width: 250}} role="presentation" onClick={handleMenuClose} onKeyDown={handleMenuClose}>
            {menuConfig[systemCode].menu()}
          </Box>
        </Drawer>
        <div style={{ height: '60px' }} />

        <Routes>
          <Route path='/' element={<div/>} />
          <Route path='/noauth' element={<NoAuthPage/>} />
          <Route path='/sessionexpired' element={<SessionExpired/>} />

          <Route path='/adduser' element={<AddUser handlePageTitle={handlePageTitle} handleSystemCode={handleSystemCode}/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}



export default App;
