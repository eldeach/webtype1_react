// ======================================================================================== [Import Libaray]
import { Box } from '@mui/material';
import { Formik } from 'formik';

// ======================================================================================== [Import Libaray] Material UI


// ======================================================================================== [Import Libaray] Material Icon


// ======================================================================================== [Import Component] CSS


function GlobalFormik(props){

    const { formContent, initialValues, yupSchema, onSubmitFunc, formId, autoComplete, sx } = props;

    return(
        <Formik
        validationSchema={yupSchema}
        onSubmit={async (values, {resetForm})=>{
            onSubmitFunc(values)
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
            {formContent({ formikValues: values, formHandleChange: handleChange, formHandleBlur: handleBlur, formTouched: touched, formErrers: errors })}
            </Box>
      )}
        </Formik>

    )
}

export default GlobalFormik