// ======================================================================================== [Import Libaray]
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, Box, IconButton, Drawer, ListItemButton, ListItemIcon, ListItemText, ListItem, List} from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';

// ======================================================================================== [Import Component] js
import appBars from './appBars';
//List items
//DocNoPattern
import AddDocNoPattern from './ListItems/DocNoPattern/AddDocNoPattern'
import MngDocNoPattern from './ListItems/DocNoPattern/MngDocNoPattern'
//DocNo
import AddDocNo from './ListItems/DocNo/AddDocNo'
import MngDocNo from './ListItems/DocNo/MngDocNo'
//Doc
import AddDoc from './ListItems/Doc/AddDoc'
import MngDoc from './ListItems/Doc/MngDoc'
//Binder
import AddBinder from './ListItems/Binder/AddBinder'
import MngBinder from './ListItems/Binder/MngBinder'
//TraceBinder
import BinderMoveHistory from './ListItems/TraceBinder/BinderMoveHistory'
import ConfigBinderLocation from './ListItems/TraceBinder/ConfigBinderLocation'



// ======================================================================================== [Import Component] CSS



function CdmsMenu(props){

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
            <div className='app-bar-menu-title'>{appBars[props.appBar].title}</div>
            <Divider />
            <List>
                <AddDocNoPattern/>
                <MngDocNoPattern/>
            </List>
            <Divider />
            <List>
                <AddDocNo/>
                <MngDocNo/>
            </List>
            <Divider />
            <List>
                <AddDoc/>
                <MngDoc/>
            </List>
            <Divider />
            <List>
                <AddBinder/>
                <MngDocNo/>
            </List>
            <Divider />
            <List>
                <AddDocNo/>
                <MngBinder/>
            </List>
            <Divider />
            <List>
                <BinderMoveHistory/>
                <ConfigBinderLocation/>
            </List>
            <Divider />
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

export default CdmsMenu;