// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, Paper, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import BusinessIcon from '@mui/icons-material/Business';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../GlobalObject/Configure/Language/langCodeBook';
import SubTitle from '../../../../../GlobalComponent/SubTitle'
import positionClear from './Components/positionClear';
import positionChange from './Components/positionChange';

import departmentClear from './Components/departmentClear';
import departmentChange from './Components/departmentChange';

import companyClear from './Components/companyClear';
import companyChange from './Components/companyChange';

// ======================================================================================== [Import Component] CSS
import './PositionBox.css'


function PositionBox(props){
  const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;
  const initialPositionValue = { position: '', department: '', company: '' }

  const [positions, setPositions] = useState([]);
  const handlePositions = (arr) => {setPositions(arr)}

  const addField = () => {
    if (positions[positions.length-1].position.trim() !== ''){
      const newPositions = [...positions, initialPositionValue];
      handlePositions(newPositions);
    }
  };

  const removeField = (index) => {
    const oldPositionsArray = [...positions]; // 원본 배열 복사
    const newPositionsArray = oldPositionsArray.filter((_, i) => i !== index); 
    handlePositions(newPositionsArray)
  };

  const handleFormValueChange = () =>{
    formikObj.formSetFieldValue('user_position',positions)
  }

  useEffect(()=>{
    handleFormValueChange();
    console.log(formikValues)
  },[positions])

  return(
    <Paper sx={paperStyle} elevation={3}>
      <SubTitle icon={<BusinessIcon color='rootsite'/>} text={"Position"}></SubTitle>
      {
        positions.length < 1 ? 
        <div className='contact-plus-button-box'>
        <Button fullWidth variant='outlined' size='small' color='rootsite' onClick={()=>setPositions([initialPositionValue])}><AddIcon size='small'/></Button>
        </div>
        :<div></div>
      }
      
      {positions.map((position, index) => (
        <div className='contact-field-box' key={index}>
          <TextField
          fullWidth
          variant="outlined"
          type="text"
          label={langCodeBook.roosite.form.users.AddUser.input.user_position.placeholder.positionField[cookies.load('site-lang')]}
          value={position.position}
          onChange={(event) => positionChange(index, event, positions, handlePositions, addField, removeField)}
          onBlur={formikObj.formHandleBlur}
          size='small'
          margin="dense"
          InputProps={{
            endAdornment:(
              <IconButton size='small' onClick={()=>setPositions(positionClear(index, positions))}>
                  <ClearIcon size='small'/>
              </IconButton>
            ),
            style: textFieldStyle // font size of input text
          }}
          InputLabelProps={{style: textFieldStyle}} // font size of input label
          />
          <TextField
          fullWidth
          variant="outlined"
          type="text"
          label={langCodeBook.roosite.form.users.AddUser.input.user_position.placeholder.department[cookies.load('site-lang')]}
          value={position.department}
          onChange={(event) => departmentChange(index, event, positions, handlePositions)}
          onBlur={formikObj.formHandleBlur}
          size='small'
          margin="dense"
          InputProps={{
            endAdornment:(
              <IconButton size='small' onClick={()=>setPositions(departmentClear(index, positions))}>
                  <ClearIcon size='small'/>
              </IconButton>
            ),
            style: textFieldStyle // font size of input text
          }}
          InputLabelProps={{style: textFieldStyle}} // font size of input label
          />
          <TextField
          fullWidth
          variant="outlined"
          type="text"
          label={langCodeBook.roosite.form.users.AddUser.input.user_position.placeholder.company[cookies.load('site-lang')]}
          value={position.company}
          onChange={(event) => companyChange(index, event, positions, handlePositions)}
          onBlur={formikObj.formHandleBlur}
          size='small'
          margin="dense"
          InputProps={{
            endAdornment:(
              <IconButton size='small' onClick={()=>setPositions(companyClear(index, positions))}>
                  <ClearIcon size='small'/>
              </IconButton>
            ),
            style: textFieldStyle // font size of input text
          }}
          InputLabelProps={{style: textFieldStyle}} // font size of input label
          />
        </div>
      ))}
    </Paper>
  )
}

export default PositionBox;