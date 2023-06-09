// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Libaray] Material UI
import { Paper } from '@mui/material';

// ======================================================================================== [Import Libaray] Material Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import GlobalFormik from '../GlobalFormik/GlobalFormik';
// ======================================================================================== [Import Component] form
import FormContent from './Form/Contents/FormContent';
import initialValues from './Form/Contents/initialValues'
import formSize from './Form/Contents/formSize'
import yupSchema from './Form/YupSchema/yupSchema';
import onSubmitFunc from './Form/Functions/onSubmitFunc';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 2,
};

function Login(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
          <Button variant="outlined" color = "white" size="small" onClick={handleOpen}>{props.labelText}</Button>
          <Modal open={open} onClose={handleClose}>
            <Paper sx={style} elevation={3}>
              <GlobalFormik sx={formSize} formContent={FormContent} initialValues={initialValues} yupSchema={yupSchema} onSubmitFunc={onSubmitFunc} formId="UserLogin" autoComplete="off"/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default Login;