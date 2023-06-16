// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function MngDocNoPattern(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <RuleFolderIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.DocNoPattern.button.MngDocNoPattern[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default MngDocNoPattern;