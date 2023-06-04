// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Libaray] Material UI
import { Paper } from '@mui/material';

// ======================================================================================== [Import Libaray] Material Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height:350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
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
            
            </Paper>
          </Modal>  
        </div>
    )
}

export default Login;