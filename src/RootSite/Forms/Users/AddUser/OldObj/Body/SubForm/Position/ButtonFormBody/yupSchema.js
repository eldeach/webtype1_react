// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//config
import positionLang from '../positionLang';

// ======================================================================================== [Import Component] CSS

  
  
  const yupSchema = yup.object().shape({

    job_position: yup.string()
    .required(positionLang.input.job_position.yup.blank[cookies.load('site-lang')]), // 필수 입력 필드
  });

  export default yupSchema;