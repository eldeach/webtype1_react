// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import FormikWrapper from '../../../GlobalObject/Factory/FormikWrapper';
// form
import FormBody from './Body/FormBody';
import yupSchema from './Body/yupSchema';
import onSubmitFunc from './Functions/onSubmitFunc';

// ======================================================================================== [Import Component] CSS

// 입력 Form
function AddUserForm(){

    const formSize={
        width: '100%',
        height:'100%',
    }

    // Form에서 사용될 변수, 초기값 선언
    const initialValues = {
        user_account: '',
        user_pw:'',
        user_pw_confirm:'',
        user_name:'',
        user_nickname:'',
        user_birthday:null,
        user_gender:'male',
        user_email:[],
        user_phone:[],
        user_position:[],
        user_auth:[]
    } 

    return (
        <FormikWrapper
        sx={formSize}
        formBody={FormBody}
        initialValues={initialValues}
        yupSchema={yupSchema}
        formFunctions={{onSubmitFunc}} 
        formId="AddUser"
        autoComplete="off"/>
    )


}

export default AddUserForm;