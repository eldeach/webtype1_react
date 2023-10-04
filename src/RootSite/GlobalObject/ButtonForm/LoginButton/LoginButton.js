// ======================================================================================== [Import Libaray]
import * as React from 'react';
import cookies from 'react-cookies'
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  



// ======================================================================================== [Import Component] js
// ButtonPopup Wrapper
import ButtonPopup from '../../Factory/ButtonPopup';
// form
import FormBody from './Body/FormBody';
import yupSchema from './Body/yupSchema';
import onSubmitFunc from './Functions/onSubmitFunc';
//config
import loginButtonLang from './loginButtonLang';
// ======================================================================================== [Import Component] CSS
const formSize={
    width: 350,
    height:240,
  }
  
  const initialValues = {
    user_account: '',
    user_pw:''
  }
  
  const paperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 2,
  };

function LoginButton(){

    const [loginStatus, setLoginStatus] = useState(false);
    const switchLoginStatus = (boolValue) => setLoginStatus(boolValue)

    return(
        <ButtonPopup
        buttonText={loginButtonLang.button.login[cookies.load('site-lang')]}
        buttonVariant="outlined"
        popupTitle="Sign in"
        titleFontSize="xx-large"
        formSize={formSize}
        formBody={FormBody}
        initialValues={initialValues}
        yupSchema={yupSchema}
        formFunctions={{onSubmitFunc, switchLoginStatus}}
        formId="UserLogin"
        autoComplete="off"
        />

    )
}


export default LoginButton;