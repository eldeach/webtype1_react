// ======================================================================================== [Import Libaray]

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, List} from '@mui/material/';

// ======================================================================================== [Import Component] js
//List items
import AddUser from './ListItems/AddUser'
import ManageUser from './ListItems/ManageUser'
import AuditTrail from './ListItems/AuditTrail'

// ======================================================================================== [Import Component] CSS

function ListsPackage(){
    return(
        <div>
            <List>
                <AddUser/>
                <ManageUser/>
            </List>
            <Divider />
            <List>
                <AuditTrail/>
            </List>
        </div>
    )
}

export default ListsPackage;