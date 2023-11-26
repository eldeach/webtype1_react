// ======================================================================================== [Import Libaray]
import * as React from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Paper } from '@mui/material';
// Icon
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


// ======================================================================================== [Import Component] js
import FormikWrapper from './FormikWrapper';

// ======================================================================================== [Import Component] CSS
import './ButtonPopup.css'

const style = { // Popup form의 화면 정중앙 정렬 style 정의
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 2,
  };


function ButtonPopup(props){
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    return(
        <div>
          <Button fullWidth={props.buttonFullWidth} variant={props.buttonVariant} color = {props.buttonColor} sx={{...props.buttonSx}} size="small" onClick={handleModalOpen}>{props.buttonText}</Button>
          <Modal open={open} onClose={handleModalClose}>
            <Paper sx={style} elevation={3}>
              <div className='button-box-close'>
                  <button className='button-close' onClick={()=>{handleModalClose()}}>X</button>
              </div>
              <div style={{fontSize:props.titleFontSize}} className='popup-title'>{props.popupTitle}</div>
              <FormikWrapper
              formSize={props.formSize}
              formBody={props.formBody}
              initialValues={props.initialValues}
              yupSchema={props.yupSchema}
              formFunctions={{...props.formFunctions, handleModalClose}}
              formId={props.formId}
              autoComplete={props.autoComplete}/>
            </Paper>
          </Modal>  
        </div>
    )
}

export default ButtonPopup;