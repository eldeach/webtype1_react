// ======================================================================================== [Import Libaray]
import * as React from 'react';
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import FormikFactory from '../../Factory/FormikFactory';
// form
import FormContent from './Contents/FormContent';
import initialValues from './Contents/initialValues'
import formSize from './Contents/formSize'
import yupSchema from './YupSchema/yupSchema';
import onSubmitFunc from './Functions/onSubmitFunc';
import logout from './Functions/logout';

// ======================================================================================== [Import Component] CSS

const paperStyle = {
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

    useEffect(() => {
      logout(switchLoginStatus) // Login Button 렌더 시 로그인 상태 업데이트
    }, []);

    return(
        <div>
          <Button variant="outlined" color = "white" size="small" onClick={()=>{loginStatus ? logout(switchLoginStatus) : handleModalOpen()}}>{loginStatus ? "Logout" : "Login"}</Button>
          <Modal open={open} onClose={handleModalClose}>
            <Paper sx={paperStyle} elevation={3}>
              <FormikFactory sx={formSize} formBody={FormContent} initialValues={initialValues} yupSchema={yupSchema} formFunctions={{onSubmitFunc, handleModalClose, switchLoginStatus}} formId="UserLogin" autoComplete="off"/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default LoginButton;