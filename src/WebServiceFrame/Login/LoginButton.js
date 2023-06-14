// ======================================================================================== [Import Libaray]
import * as React from 'react';
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import GlobalFormik from '../GlobalFormik/GlobalFormik';
// form
import FormContent from './Form/Contents/FormContent';
import initialValues from './Form/Contents/initialValues'
import formSize from './Form/Contents/formSize'
import yupSchema from './Form/YupSchema/yupSchema';
import onSubmitFunc from './Form/Functions/onSubmitFunc';

// ======================================================================================== [Import Component] CSS

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 2,
};

function LoginButton(){
    const [open, setOpen] = useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    
    const [loginStatus, setLoginStatus] = useState(false);
    const switchLoginStatus = (boolValue) => setLoginStatus(boolValue)

    return(
        <div>
          <Button variant="outlined" color = "white" size="small" onClick={handleModalOpen}>{loginStatus ? "Logout" : "Login"}</Button>
          <Modal open={open} onClose={handleModalClose}>
            <Paper sx={style} elevation={3}>
              <GlobalFormik sx={formSize} formContent={FormContent} initialValues={initialValues} yupSchema={yupSchema} formFunctions={{onSubmitFunc, handleModalClose, switchLoginStatus}} formId="UserLogin" autoComplete="off"/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default LoginButton;