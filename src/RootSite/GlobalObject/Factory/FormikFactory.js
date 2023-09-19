// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, Box } from '@mui/material';
import { useActionData } from 'react-router-dom';
import { useEffect } from 'react';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS



function FormikFactory(props){

    const { formBody,formFunctions, // 이 중에 formFunctions만 formBody component에 전달함
        initialValues, yupSchema, formId, autoComplete, sx,
        
    } = props;

    return(
        <Formik
        validationSchema={yupSchema}
        onSubmit={async (values, {resetForm, setFieldValue})=>{
            formFunctions.onSubmitFunc({
                values:values, // Formik에서 정의된 모든 값 전달
                formFunctions:formFunctions, // FormikFactory 밖에서 정의한 함수 모두 전달, onSubmitFunc에서 모든 함수 사용할 수 있게함
                formikObj:{ formSetFieldValue:setFieldValue, formReset:resetForm }// Formik 내장 함수 중 필드들을 변경할 수 있는 함수는 모두 전달
            }) 
        }}
        initialValues={initialValues}
        >
        {({ handleSubmit, handleChange, handleBlur, validateField, setFieldValue, resetForm, values, touched, isValid, errors})=>(
            <Box 
            id={formId}
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete={autoComplete}
            sx={sx}
            >
            {
                formBody({
                    // FormikFactory 객체 밖에서 전달 받은 함수 (FormikFactory 사용하는 Component나 그 밖에서 정의되어야 함)
                    formFunctions:formFunctions,
                    // formik 객체 (값, 내장함수, 리스너 formBody 전달)
                    formikValues: values,
                    formikObj:{
                        formHandleChange: handleChange,
                        formHandleBlur: handleBlur,
                        formSetFieldValue:setFieldValue,
                        formReset:resetForm,
                        formTouched: touched,
                        formErrers: errors
                    }
                })
            }
            </Box>
      )}
        </Formik>

    )
}

export default FormikFactory;