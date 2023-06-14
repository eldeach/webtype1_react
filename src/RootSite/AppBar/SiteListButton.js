// ======================================================================================== [Import Libaray]
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, Box, IconButton, Drawer, ListItemButton, ListItemIcon, ListItemText, ListItem, List} from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';
import RuleIcon from '@mui/icons-material/Rule';
import DnsIcon from '@mui/icons-material/Dns';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS



function SiteListButton(props){

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
            <div>{"aa"}</div>
            <List>
                <ListItem disablePadding>
                <ListItemButton onClick={()=>{
                    }}>
                    <ListItemIcon>
                    <DnsIcon color="primary"/> 
                    </ListItemIcon>
                    <ListItemText primary={"aa"} />
                </ListItemButton>
                </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>{
                    }}>
                    <ListItemIcon>
                    <RuleIcon color="primary"/> 
                    </ListItemIcon>
                    <ListItemText primary={"문서번호 패턴 추가"} />
                </ListItemButton>
                </ListItem>
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

export default SiteListButton;