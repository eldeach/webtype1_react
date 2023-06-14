// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function ConfigBinderLocation(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <RuleFolderIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.TraceBinder.button.ConfigBinderLocation[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default ConfigBinderLocation;