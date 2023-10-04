// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//config
import loginButtonLang from '../loginButtonLang';

// ======================================================================================== [Import Component] CSS

  
  
  const yupSchema = yup.object().shape({

    user_account: yup.string()
    .required(loginButtonLang.input.user_account.yup[cookies.load('site-lang')]),

    user_pw: yup.string()
    .required(loginButtonLang.input.user_pw.yup[cookies.load('site-lang')])
  });

  export default yupSchema;