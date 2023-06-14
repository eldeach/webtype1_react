// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function AddBinder(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <ManageAccountsIcon color="primary"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.binder.button.addbinder[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default AddBinder;