// ======================================================================================== [Import Libaray]
import * as React from 'react';
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import GlobalFormik from '../../../GlobalFormik/GlobalFormik';
// form
import FormContent from './Contents/FormContent';
import initialValues from './Contents/initialValues'
import formSize from './Contents/formSize'
import yupSchema from './YupSchema/yupSchema';
import onSubmitFunc from './Functions/onSubmitFunc';

// ======================================================================================== [Import Component] CSS


function AddUserForm(){
    return (
        <GlobalFormik sx={formSize} formContent={FormContent} initialValues={initialValues} yupSchema={yupSchema} formFunctions={{onSubmitFunc}} formId="AddUser" autoComplete="off"/>
    )


}

export default AddUserForm;