// ======================================================================================== [Import Libaray] Material UI
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/';

// ======================================================================================== [Import Libaray] Material Icon
import MenuIcon from '@mui/icons-material/Menu';

// ======================================================================================== [Import Component] js
import LoginButton from '../Login/LoginButton';

function WebBasketAppBar(){
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
                    FrontAppBar
                </Typography>
                <LoginButton labelText="Login"/> 
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default WebBasketAppBar;