// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function MngDoc(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <RuleFolderIcon color="primary"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.roosite.button.audittrail[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default MngDoc;