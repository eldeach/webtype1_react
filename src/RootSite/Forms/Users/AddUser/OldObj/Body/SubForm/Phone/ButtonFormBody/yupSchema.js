// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//config
import phoneLang from '../phoneLang';

// ======================================================================================== [Import Component] CSS

  
  
  const yupSchema = yup.object().shape({

    phone_number: yup.string()
    .matches(/^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/,phoneLang.input.phone_number.yup.wrong_pattern[cookies.load('site-lang')]) // 이메일 유효성 검사
    .required(phoneLang.input.phone_number.yup.blank[cookies.load('site-lang')]), // 필수 입력 필드
  });

  export default yupSchema;