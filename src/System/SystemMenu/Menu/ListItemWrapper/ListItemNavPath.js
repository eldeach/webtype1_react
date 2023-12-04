// ======================================================================================== [Import Libaray]
import { useNavigate } from 'react-router-dom';

// ======================================================================================== [Import Material UI Libaray]  
import { ListItemButton, ListItemIcon, ListItemText, ListItem  } from '@mui/material/';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function ListItemNavPath(props) {
    const navigate = useNavigate();
//onClick={()=>{ navigate( props.navPath )}}
    return (
        <div>
            <ListItem disablePadding={true}>
                <ListItemButton href = {props.navPath}>
                    <ListItemIcon> {props.icon}</ListItemIcon>
                    <ListItemText primary={props.text} />
                </ListItemButton>
            </ListItem>
        </div>
    )

}

export default ListItemNavPath;


