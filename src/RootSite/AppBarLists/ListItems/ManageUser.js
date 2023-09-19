// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
//icon
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// ======================================================================================== [Import Component] js
import ListItemFactory from '../../GlobalObject/Factory/AppBar/MenuFactory/ListItemFactory'
import langCodeBook from '../../GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function ManageUser(){

    return(
        <ListItemFactory path={'/manageuser'} iconComponent={<ManageAccountsIcon color='rootsite'/>} labelText={langCodeBook.roosite.menu.users.button.ManageUser[cookies.load('site-lang')]} />
    )
}

export default ManageUser;