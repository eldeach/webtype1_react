// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import PostAddIcon from '@mui/icons-material/PostAdd';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AddDoc(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <PostAddIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.Doc.button.AddDoc[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default AddDoc;