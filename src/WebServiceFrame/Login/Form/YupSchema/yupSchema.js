// ======================================================================================== [Import Libaray]
import * as yup from 'yup';

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS

  
  
  const yupSchema = yup.object().shape({

    user_account: yup.string()
    .required('계정을 입력해주세요.'),

    user_pw: yup.string()
    .required('비밀번호를 입력해주세요.')
  });

  export default yupSchema;