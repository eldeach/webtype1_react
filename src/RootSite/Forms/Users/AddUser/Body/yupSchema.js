// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
// import langCodeBook from '../../../../GlobalObject/Configure/Language/langCodeBook'
import ppiLang from './SubForm/PPI/ppiLang';
import emailLang from './SubForm/Email/emailLang'

// ======================================================================================== [Import Component] CSS

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
const yupSchema = yup.object().shape({

  user_account: yup.string()
  .required(ppiLang.input.user_account.yup[cookies.load('site-lang')]),

  user_pw: yup.string()
  .required(ppiLang.input.user_pw.yup[cookies.load('site-lang')]),

  user_pw_confirm: yup.string()
  .oneOf([yup.ref('user_pw'), null], ppiLang.input.user_pw_confirm.yup.match[cookies.load('site-lang')])
  .required(ppiLang.input.user_pw_confirm.yup.required[cookies.load('site-lang')]),

  // user_email: yup.object().shape({
  //   email_address: yup.string()
  //     .required(emailLang.input.email_address.yup[cookies.load('site-lang')]),
  // }),
});

  export default yupSchema;