// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Divider, List } from '@mui/material/';
//icon
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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
        <ListItemNavPath navPath={'/adduser'} icon={<PersonAddIcon color = 'sys1'/>} text={ sys1ListLang.addUser[cookies.load('site-lang')] }/>
        <ListItemNavPath navPath={'/dndtest'} icon={<PersonAddIcon color = 'sys1'/>} text={ "DnD Test" }/>
        <ListItemNavPath navPath={'/tbtest'} icon={<PersonAddIcon color = 'sys1'/>} text={ "Table Test" }/>
      </List>
    </div>
  )
}

export default Sys1List;