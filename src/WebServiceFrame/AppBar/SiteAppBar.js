// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/';
//icon
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

// ======================================================================================== [Import Component] js
import LoginButton from '../Login/LoginButton';
import SelectLangButton from '../Language/SelectLangButton';
import appBars from './appBars';

// ======================================================================================== [Import Component] CSS


function SiteAppBar(props){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar variant="dense">
                {appBars[props.appBar].listButton()}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {appBars[props.appBar].title}
                </Typography>
                <SelectLangButton labelText={<LanguageIcon/>}/>
                <LoginButton/> 
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default SiteAppBar;