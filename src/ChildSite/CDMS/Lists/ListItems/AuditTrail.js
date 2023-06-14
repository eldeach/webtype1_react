// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
//icon
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

// ======================================================================================== [Import Component] js
import ListItemDie from '../../Die/ListItemDie'
import langCodeBook from '../../../../Language/langCodeBook';

// ======================================================================================== [Import Component] CSS

function AuditTrail(){

    return(
        <ListItemDie path={'/cdms'} iconComponent={<ContentPasteSearchIcon color='rootsite'/>} labelText={langCodeBook.roosite.button.AuditTrail[cookies.load('site-lang')]} />
    )
}

export default AuditTrail;