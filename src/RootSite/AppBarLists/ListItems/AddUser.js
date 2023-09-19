// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
//icon
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

// ======================================================================================== [Import Component] js
import ListItemFactory from '../../GlobalObject/Factory/AppBar/MenuFactory/ListItemFactory'
import langCodeBook from '../../GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AddUser(){

    return(
        <ListItemFactory path={'/adduser'} iconComponent={<PersonAddAlt1Icon color='rootsite'/>} labelText={langCodeBook.roosite.menu.users.button.AddUser[cookies.load('site-lang')]} />
    )
}

export default AddUser;