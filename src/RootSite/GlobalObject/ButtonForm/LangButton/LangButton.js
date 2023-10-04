// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Material UI Libaray]  

//icon
import LanguageIcon from '@mui/icons-material/Language';

// ======================================================================================== [Import Component] js
// ButtonPopup Wrapper
import ButtonPopup from '../../Factory/ButtonPopup';
// form
import FormBody from './Body/FormBody';
// ======================================================================================== [Import Component] CSS
const formSize={
    width: 300,
    height:200,
  }
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 2,
  };

function LangButton(){

    return(
        <ButtonPopup
        buttonText={<LanguageIcon/>}
        buttonVariant="text"
        popupTitle="Sign in"
        titleFontSize="xx-large"
        formSize={formSize}
        formBody={FormBody}
        initialValues={{}}
        yupSchema={{}}
        formFunctions={{}}
        formId="SelectLang"
        autoComplete="off"
        />

    )
}


export default LangButton;