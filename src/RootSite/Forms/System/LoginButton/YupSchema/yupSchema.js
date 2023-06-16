// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../Configure/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

  
  
  const yupSchema = yup.object().shape({

    user_account: yup.string()
    .required(langCodeBook.roosite.form.system.login.input.user_account.yup[cookies.load('site-lang')]),

    user_pw: yup.string()
    .required(langCodeBook.roosite.form.system.login.input.user_pw.yup[cookies.load('site-lang')])
  });

  export default yupSchema;