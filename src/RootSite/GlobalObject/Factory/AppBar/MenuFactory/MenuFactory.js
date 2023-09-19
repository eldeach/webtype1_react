// ======================================================================================== [Import Libaray]
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, Box, IconButton, Drawer } from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';

// ======================================================================================== [Import Component] js
import configAppBars from '../../../Configure/AppBar/configAppBars'

// ======================================================================================== [Import Component] CSS



function MenuFactory(props){

    let [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    let toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    
    let anchor = 'left'
    let list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>{configAppBars[props.appBarName].title}</div>
            <Divider />
            {configAppBars[props.appBarName].listPackage()}
        </Box>
    );
    return(
        <div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
            >
                <MenuIcon />
            </IconButton>
                
            <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </div>

    )

}

export default MenuFactory;