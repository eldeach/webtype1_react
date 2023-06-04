// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Libaray] Material UI
import { Paper } from '@mui/material';

// ======================================================================================== [Import Libaray] Material Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import GlobalFormik from '../Formiks/GlobalFormik'
import FormContent from './FormikContents/FormContent';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 2,
};

const formikStyle={
  width: 350,
  height:350,
  bgcolor: 'background.paper',
}

function Login(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
          <Button variant="outlined" color = "white" size="small" onClick={handleOpen}>{props.labelText}</Button>
          <Modal open={open} onClose={handleClose}>
            <Paper sx={style} elevation={3}>
              <GlobalFormik sx={formikStyle} formContent = {<FormContent/>}/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default Login;