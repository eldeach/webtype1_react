// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';

// ======================================================================================== [Import Material UI Libaray]  
import { Box } from '@mui/material';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS



function GlobalFormik(props){

    const { formContent, initialValues, yupSchema, formFunctions, formId, autoComplete, sx } = props;

    return(
        <Formik
        validationSchema={yupSchema}
        onSubmit={async (values, {resetForm})=>{
            formFunctions.onSubmitFunc({values:values,formFunctions:formFunctions})
        }}
        initialValues={initialValues}
        >
        {({ handleSubmit, handleChange, handleBlur, validateField, values, touched, resetForm, isValid, errors})=>(
            <Box 
            id={formId}
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete={autoComplete}
            sx={sx}
            >
            {formContent({ formFunctions:formFunctions, formikValues: values, formikObj:{formHandleChange: handleChange, formHandleBlur: handleBlur, formTouched: touched, formErrers: errors, formReset:resetForm} })}
            </Box>
      )}
        </Formik>

    )
}

export default GlobalFormik