// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../Configure/Language/langCodeBook'

// ======================================================================================== [Import Component] CSS

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
const yupSchema = yup.object().shape({

  user_account: yup.string()
  .required(langCodeBook.roosite.form.users.AddUser.input.user_account.yup[cookies.load('site-lang')]),

  user_pw: yup.string()
  .required(langCodeBook.roosite.form.users.AddUser.input.user_pw.yup[cookies.load('site-lang')]),

});

  export default yupSchema;