// ======================================================================================== [Import Libaray]
import * as React from 'react';


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import FormikFactory from '../../../GlobalObject/Factory/FormikFactory';
// form
import FormBody from './Body/FormBody';
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
        user_gender:'m',
        user_email:[],
        user_phone:[],
        user_position:[],
        user_auth:[]
    }
    

    return (
        <FormikFactory
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