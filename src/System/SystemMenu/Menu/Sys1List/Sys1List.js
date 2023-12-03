// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, List } from '@mui/material/';
//icon
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

// ======================================================================================== [Import Component] js
import ListItemNavPath from '../ListItemWrapper/ListItemNavPath';
import sys1ListLang from './sys1ListLang';

// ======================================================================================== [Import Component] CSS

function Sys1List() {
  

  return (
    <div>
      <List>
        <ListItemNavPath navPath={'/'} icon={<ChangeCircleIcon color = 'sys1'/>} text={ sys1ListLang.returnFirstPage[cookies.load('site-lang')] }/>
      </List>
      <Divider />
      <List>
        <ListItemNavPath navPath={'/adduser'} icon={<PersonAddIcon color = 'sys1' size = "small"/>} text={ sys1ListLang.addUser[cookies.load('site-lang')] }/>
        <ListItemNavPath navPath={'/userlist'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ sys1ListLang.viewUser[cookies.load('site-lang')] }/>
        <ListItemNavPath navPath={'/userlist_inprogress'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_inprogress' }/>
        <ListItemNavPath navPath={'/userlist_void'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_void' }/>
        <ListItemNavPath navPath={'/userlist_undervoid'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_undervoid' }/>
        <ListItemNavPath navPath={'/userlist_rejected'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_rejected' }/>
        <ListItemNavPath navPath={'/userlist_prepared'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_prepared' }/>
        <ListItemNavPath navPath={'/userlist_widthdrawn'} icon={<RecentActorsIcon color = 'sys1' size = "small"/>} text={ 'userlist_widthdrawn' }/>
      </List>
    </div>
  )
}

export default Sys1List;