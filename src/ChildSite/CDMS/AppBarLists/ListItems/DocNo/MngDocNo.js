// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';
//icon
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../RootSite/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

function MngDocNo(){
    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{

            }}>
                <ListItemIcon>
                <FormatListNumberedIcon color="cdms"/> 
                </ListItemIcon>
                <ListItemText primary={langCodeBook.cdms.DocNo.button.MngDocNo[cookies.load('site-lang')]} />
            </ListItemButton>
        </ListItem>
    )
}

export default MngDocNo;