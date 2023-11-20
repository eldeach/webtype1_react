// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';

// ======================================================================================== [Import Material UI Libaray]  
import { Box } from '@mui/material';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function FormikWrapper(props){
    const {yupSchema, initialValues, formId, autoComplete, formSize, formFunctions} = props;

    return(
        <Formik
        validationSchema={yupSchema}
        onSubmit={async (values, actions)=>{
            formFunctions.onSubmitFunc({
                ...props,
                values:values, // Submit 하기 위해 Formik 값 객체 전달
                formikObj:actions// Formik 내장 함수 중 필드들을 변경할 수 있는 함수는 모두 전달
            }) 
        }}
        initialValues={initialValues}
        >
        {/* {
        ({ handleSubmit, setFieldValue, resetForm, handleChange, handleBlur, values, touched, isValid, errors}) => ( */}
        {formikObj=>(
            // <Box 
            // id={formId}
            // component="form"
            // noValidate
            // onSubmit={formikObj.handleSubmit}
            // autoComplete={autoComplete}
            // sx={formSize}
            // >
            <form style={{...formSize}} id={formId} noValidate onSubmit={formikObj.handleSubmit} autoComplete={autoComplete}>
            {
                props.formBody({
                    formFunctions:formFunctions,
                    //...props,  FormikWrapper 사용한 부모폼이 전달한 모든 props FormBody에 재전달
                    // formikObj:{ // Formik 객체 추가 전달
                    //     setFieldValue:setFieldValue,
                    //     resetForm:resetForm,
                    //     handleChange: handleChange,
                    //     handleBlur: handleBlur,
                    //     values:values,
                    //     touched: touched,
                    //     isValid:isValid,
                    //     errors: errors
                    // },
                    formikObj:formikObj
                })
            }
            {/* </Box> */}
            </form>
      )}
        </Formik>

    )
}

export default FormikWrapper;