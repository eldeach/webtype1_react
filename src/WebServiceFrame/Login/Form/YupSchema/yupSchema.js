// ======================================================================================== [Import Libaray]
import * as yup from 'yup';
  
  
  const yupSchema = yup.object().shape({

    user_account: yup.string()
    .required('계정을 입력해주세요.'),

    user_pw: yup.string()
    .required('비밀번호를 입력해주세요.')
  });

  export default yupSchema;