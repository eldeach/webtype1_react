// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

// ======================================================================================== [Import Component] js
import LoginButton from '../Login/LoginButton';
import SelectLangButton from '../Language/SelectLangButton';

// ======================================================================================== [Import Component] CSS


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
                <SelectLangButton labelText={<LanguageIcon/>}/>
                <LoginButton labelText="Login"/> 
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default WebBasketAppBar;