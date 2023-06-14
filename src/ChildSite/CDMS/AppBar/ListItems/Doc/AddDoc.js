// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function AddDoc(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <ManageAccountsIcon color="primary"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.roosite.button.manageuser[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default AddDoc;