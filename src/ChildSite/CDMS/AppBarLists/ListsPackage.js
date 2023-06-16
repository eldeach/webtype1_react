// ======================================================================================== [Import Libaray]

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, List} from '@mui/material/';

// ======================================================================================== [Import Component] js
//List items
//DocNoPattern
import AddDocNoPattern from './ListItems/DocNoPattern/AddDocNoPattern'
import MngDocNoPattern from './ListItems/DocNoPattern/MngDocNoPattern'
//DocNo
import AddDocNo from './ListItems/DocNo/AddDocNo'
import MngDocNo from './ListItems/DocNo/MngDocNo'
//Doc
import AddDoc from './ListItems/Doc/AddDoc'
import MngDoc from './ListItems/Doc/MngDoc'
//Binder
import AddBinder from './ListItems/Binder/AddBinder'
import MngBinder from './ListItems/Binder/MngBinder'
//TraceBinder
import BinderMoveHistory from './ListItems/TraceBinder/BinderMoveHistory'
import ConfigBinderLocation from './ListItems/TraceBinder/ConfigBinderLocation'


// ======================================================================================== [Import Component] CSS

function ListsPackage(){
    return(
        <div>
            <List>
                <AddDocNoPattern/>
                <MngDocNoPattern/>
            </List>
            <Divider />
            <List>
                <AddDocNo/>
                <MngDocNo/>
            </List>
            <Divider />
            <List>
                <AddDoc/>
                <MngDoc/>
            </List>
            <Divider />
            <List>
                <AddBinder/>
                <MngBinder/>
            </List>
            <Divider />
            <List>
                <BinderMoveHistory/>
                <ConfigBinderLocation/>
            </List>
            <Divider />
        </div>
    )
}

export default ListsPackage;