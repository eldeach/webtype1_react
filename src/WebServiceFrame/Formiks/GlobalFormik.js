// ======================================================================================== [Import Libaray]
import { Box } from '@mui/material';
import { Formik } from 'formik';

function GlobalFormik(props){
    return(
        <Formik>
            <Box sx={props.sx}>
                {props.formContent}
            </Box>
        </Formik>

    )
}

export default GlobalFormik