// ======================================================================================== [Import Libaray]
import * as React from 'react';


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import FormikFactory from '../../../GlobalObject/Factory/FormikFactory';
// form
import FormContent from './Contents/FormContent';
// import initialValues from './Contents/initialValues'
import yupSchema from './YupSchema/yupSchema';
import onSubmitFunc from './Functions/onSubmitFunc';

// ======================================================================================== [Import Component] CSS


function AddUserForm(){

    const formSize={
        width: '100%',
        height:'100%',
    }

    const initialValues = {
        user_account: '',
        user_pw:'',
        user_name:'',
        user_nickname:'',
        user_birthday:null,
        user_email:[],
        user_phone:[],
        user_position:[],
        user_auth:[]
    }
    

    return (
        <FormikFactory
        sx={formSize}
        formContent={FormContent}
        initialValues={initialValues}
        yupSchema={yupSchema}
        formFunctions={{onSubmitFunc}} //onSubmitFunc를 제외한 모든 함수들은 여기에 전달되면 onSubmitFunc로 다시 전달해줄 것임. (formik의 values도 모두 전달됨)
        formId="AddUser"
        autoComplete="off"/>
    )


}

export default AddUserForm;