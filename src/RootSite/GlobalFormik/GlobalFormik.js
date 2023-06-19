// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';

// ======================================================================================== [Import Material UI Libaray]  
import { Box } from '@mui/material';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS



function GlobalFormik(props){

    const { formContent, initialValues, yupSchema, formId, autoComplete, sx,
        formFunctions // 이 중에 formFunctions만 FormContent component에 전달함
    } = props;

    return(
        <Formik
        validationSchema={yupSchema}
        onSubmit={async (values, {resetForm, setFieldValue})=>{
            formFunctions.onSubmitFunc({
                values:values, // Formik에서 정의된 모든 값 전달
                formFunctions:formFunctions, // GlobalFormik 밖에서 정의한 함수 모두 전달, onSubmitFunc에서 모든 함수 사용할 수 있게함
                formikObj:{ formSetFieldValue:setFieldValue, formReset:resetForm }} // Formik 내장 함수 중 필드들을 변경할 수 있는 함수는 모두 전달
                ) 
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
                formContent({
                    // GlobalFormik 객체 밖에서 전달 받은 함수 (GlobalFormik 사용하는 Component나 그 밖에서 정의되어야 함)
                    formFunctions:formFunctions,
                    // formik 객체 (값, 내장함수, 리스너 FormContent에 전달)
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

export default GlobalFormik