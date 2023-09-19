// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  
import { AppBar, Box, Toolbar, Typography } from '@mui/material/';
//icon
import LanguageIcon from '@mui/icons-material/Language';

// ======================================================================================== [Import Component] js
import LoginButton from '../../ButtonForm/LoginButton/LoginButton';
import LangButton from '../../ButtonForm/LangButton/LangButton';
import configAppBars from '../../Configure/AppBar/configAppBars';
import MenuFactory from './MenuFactory/MenuFactory'

// ======================================================================================== [Import Component] CSS


function SiteAppBar(props){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color = {props.appBarName} position="fixed">
            <Toolbar variant="dense">
                <MenuFactory appBarName={props.appBarName}/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {configAppBars[props.appBarName].title}
                </Typography>
                <LangButton/>
                <LoginButton/> 
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default SiteAppBar;