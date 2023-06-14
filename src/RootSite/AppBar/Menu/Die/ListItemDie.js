// ======================================================================================== [Import Libaray]
import { useNavigate } from "react-router-dom";

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material/';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS

function ListItemDie(props){
    let navigate = useNavigate();

    return(
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                navigate(props.path)
            }}>
                <ListItemIcon>
                {props.iconComponent}
                </ListItemIcon>
                <ListItemText primary={props.labelText} />
            </ListItemButton>
        </ListItem>
    )
}

export default ListItemDie;