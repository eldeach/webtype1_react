// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import RuleIcon from '@mui/icons-material/Rule';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AddDocNoPattern(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <RuleIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.DocNoPattern.button.AddDocNoPattern[cookies.load('site-lang')]}  />
            </ListItemButton>
        </ListItem>
    )
}

export default AddDocNoPattern;