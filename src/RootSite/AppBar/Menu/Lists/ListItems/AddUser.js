// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
//icon
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

// ======================================================================================== [Import Component] js
import ListItemDie from '../../Die/ListItemDie'
import langCodeBook from '../../../../Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AddUser(){

    return(
        <ListItemDie path={'/adduser'} iconComponent={<PersonAddAlt1Icon color='rootsite'/>} labelText={langCodeBook.roosite.menu.users.button.AddUser[cookies.load('site-lang')]} />
    )
}

export default AddUser;