// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import InventoryIcon from '@mui/icons-material/Inventory';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function MngDoc(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <InventoryIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.Doc.button.MngDoc[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default MngDoc;