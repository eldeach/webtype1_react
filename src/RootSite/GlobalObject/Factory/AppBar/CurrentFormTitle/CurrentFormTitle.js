// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
//icon
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

// ======================================================================================== [Import Component] js
import currentFormTitleLang from './currentFormTitleLang'

// ======================================================================================== [Import Component] CSS
import './CurrentFormTitle.css'


function CurrentFormTitle(props){

    if (props.pathName.indexOf("/adduser")!==-1){
        return (
            <div className="form-title-box">
                <PersonAddAlt1Icon/>
                <div style={{marginTop:'3px', marginLeft:'5px'}}>{currentFormTitleLang.adduser[cookies.load('site-lang')]}</div>
            </div>
        )
    }

    else {
        return(
            <div>{""}</div>
        )
    }
}

export default CurrentFormTitle;