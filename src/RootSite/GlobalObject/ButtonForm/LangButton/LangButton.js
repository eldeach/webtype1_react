// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LanguageIcon from '@mui/icons-material/Language';


// ======================================================================================== [Import Component] js
import FormikFactory from '../../Factory/FormikFactory';
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

function LangButton(){
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    return(
        <div>
          <Button variant="text" color = "white" size="small" onClick={handleModalOpen}>{<LanguageIcon/>}</Button>
          <Modal open={open} onClose={handleModalClose}>
            <Paper sx={style} elevation={3}>
              <FormikFactory sx={formSize} formBody={FormContent} initialValues={{}} yupSchema={{}} formFunctions={{handleModalClose}} formId="SelectLang" autoComplete="off"/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default LangButton;