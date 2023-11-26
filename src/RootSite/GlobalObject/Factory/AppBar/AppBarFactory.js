// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  
import { AppBar, Box, Toolbar, Typography } from '@mui/material/';
//icon

// ======================================================================================== [Import Component] js
import LoginButton from '../../../Forms/ButtonLogin/LoginButton';
import LangButton from '../../../Forms/ButtonLang/LangButton';
import configAppBars from '../../Configure/AppBar/configAppBars';
import MenuFactory from './MenuFactory/MenuFactory'
import CurrentFormTitle from './CurrentFormTitle/CurrentFormTitle'

// ======================================================================================== [Import Component] CSS


function AppBarFactory(props){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color = {props.appBarName} position="fixed">
            <Toolbar variant="dense">
                <MenuFactory appBarName={props.appBarName}/>
                <Typography variant="h6" component="div">
                    {configAppBars[props.appBarName].title}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <CurrentFormTitle pathName={props.pathName}/>
                </Box>
                <LangButton/>
                <LoginButton/> 
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarFactory;