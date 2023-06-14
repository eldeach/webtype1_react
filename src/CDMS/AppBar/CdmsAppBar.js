import { AppBar, Divider, Box, Toolbar, Typography, Button, IconButton, Drawer, ListItemButton, ListItemIcon, ListItemText, ListItem, List} from '@mui/material/';

import MenuIcon from '@mui/icons-material/Menu';

function CdmsAppBar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CDMS
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default CdmsAppBar;