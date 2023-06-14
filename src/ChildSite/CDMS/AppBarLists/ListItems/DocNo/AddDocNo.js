// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import AddIcon from '@mui/icons-material/Add';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function AddDocNo(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <AddIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.DocNo.button.AddDocNo[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default AddDocNo;