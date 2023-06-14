// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function ManageUser(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <ContentPasteSearchIcon color="primary"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.roosite.button.audittrail[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default ManageUser;