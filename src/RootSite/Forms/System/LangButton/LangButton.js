// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// ======================================================================================== [Import Component] js
import GlobalFormik from '../../../GlobalFormik/GlobalFormik';
// form
import FormContent from './Contents/FormContent';
import formSize from './Contents/formSize'

// ======================================================================================== [Import Component] CSS

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 2,
};

function LangButton(props){
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    return(
        <div>
          <Button variant="text" color = "white" size="small" onClick={handleModalOpen}>{props.labelText}</Button>
          <Modal open={open} onClose={handleModalClose}>
            <Paper sx={style} elevation={3}>
              <GlobalFormik sx={formSize} formContent={FormContent} initialValues={{}} yupSchema={{}} formFunctions={{handleModalClose}} formId="SelectLang" autoComplete="off"/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default LangButton;