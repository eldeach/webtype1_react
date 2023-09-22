// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import emailLang from '../emailLang'

// ======================================================================================== [Import Component] CSS

const emailYupSchema = yup.string()
.email(emailLang.input.email_address.yup.wrong_pattern[cookies.load('site-lang')]) // 이메일 유효성 검사
// .required(emailLang.input.email_address.yup.blank[cookies.load('site-lang')]) // 필수 입력 필드

export default emailYupSchema;

