// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';

// ======================================================================================== [Import Material UI Libaray]  
import { Box } from '@mui/material';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS



function FormikFactory(props){

    return(
        <Formik
        validationSchema={props.yupSchema}
        onSubmit={async (values, {resetForm, setFieldValue})=>{
            props.formFunctions.onSubmitFunc({
                ...props,
                values:values, // Submit 하기 위해 Formik 값 객체 전달
                formikObj:{ setFieldValue:setFieldValue, formReset:resetForm }// Formik 내장 함수 중 필드들을 변경할 수 있는 함수는 모두 전달
            }) 
        }}
        initialValues={props.initialValues}
        >
        {({ handleSubmit, setFieldValue, resetForm, handleChange, handleBlur, values, touched, isValid, errors})=>(
            <Box 
            id={props.formId}
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete={props.autoComplete}
            sx={props.formSize}
            >
            {
                props.formBody({
                    ...props, // FormikWrapper 사용한 부모폼이 전달한 모든 props FormBody에 재전달
                    formikObj:{ // Formik 객체 추가 전달
                        setFieldValue:setFieldValue,
                        resetForm:resetForm,
                        handleChange: handleChange,
                        handleBlur: handleBlur,
                        values:values,
                        touched: touched,
                        isValid:isValid,
                        errors: errors
                    },
                })
            }
            </Box>
      )}
        </Formik>

    )
}

export default FormikFactory;