// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AddBinder(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <CreateNewFolderIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.Binder.button.AddBinder[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default AddBinder;