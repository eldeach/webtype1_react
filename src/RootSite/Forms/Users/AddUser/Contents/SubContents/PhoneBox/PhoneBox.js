// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Autocomplete, Button, IconButton, Paper, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../Configure/Language/langCodeBook';
import SubTitle from '../../../../../GlobalComponent/SubTitle'
import phoneCat from './Components/phoneCat'
import phoneClear from './Components/phoneClear';
import phoneChange from './Components/phoneChange';
import purposeChange from './Components/purposeChange';
import affiliationClear from './Components/affiliationClear';
import affiliationChange from './Components/affiliationChange';

// ======================================================================================== [Import Component] CSS
import './PhoneBox.css'


function PhoneBox(props){
  const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;
  const initialPhoneValue = { phone: '', type: 'personal', company: '' }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  const [phones, setPhones] = useState([]);
  const handlePhones = (arr) => {setPhones(arr)}

  const addField = () => {
    if (phones[phones.length-1].phone.trim() !== ''){
      const newPhones = [...phones, initialPhoneValue];
      handlePhones(newPhones);
    }
  };

  const removeField = (index) => {
    const oldPhonesArray = [...phones]; // 원본 배열 복사
    const newPhonesArray = oldPhonesArray.filter((_, i) => i !== index); 
    handlePhones(newPhonesArray)
  };

  const handleFormValueChange = () =>{
    formikObj.formSetFieldValue('user_phone',phones)
  }

  useEffect(()=>{
    handleFormValueChange();
    console.log(formikValues)
  },[phones])

  return(
    <Paper sx={paperStyle} elevation={3}>
      <SubTitle icon={<PhoneInTalkIcon color='rootsite'/>} text={"Phone Number"}></SubTitle>
      {
        phones.length < 1 ? 
        <div className='contact-plus-button-box'>
        <Button fullWidth variant='outlined' size='small' color='rootsite' onClick={()=>setPhones([initialPhoneValue])}><AddIcon size='small'/></Button>
        </div>
        :<div></div>
      }
      
      {phones.map((phone, index) => (
        <div className='contact-field-box' key={index}>
          <TextField
          fullWidth
          variant="outlined"
          type="text"
          label={langCodeBook.roosite.form.users.AddUser.input.user_phone.placeholder.phoneField[cookies.load('site-lang')]}
          value={phone.phone}
          onChange={(event) => phoneChange(index, event, phones, handlePhones, addField, removeField)}
          onBlur={formikObj.formHandleBlur}
          helperText={!phoneRegExp.test(phone.phone)?"번호 형식 확인":""}
          error={!phoneRegExp.test(phone.phone)}
          size='small'
          margin="dense"
          InputProps={{
            endAdornment:(
              <IconButton size='small' onClick={()=>setPhones(phoneClear(index, phones))}>
                  <ClearIcon size='small'/>
              </IconButton>
            ),
            style: textFieldStyle // font size of input text
          }}
          InputLabelProps={{style: textFieldStyle}} // font size of input label
          />
          <div className='contact-box-2'>
            <Autocomplete
            options={phoneCat}
            getOptionLabel={(option) => option.label}
            size="small"
            sx={{width:260}}
            value={phoneCat.find((option) => option.value === phone.type)}
            onChange={(event, value) => purposeChange(index, event, value, phones, handlePhones)}
            renderInput={(params) => <TextField {...params}
            label={langCodeBook.roosite.form.users.AddUser.input.user_phone.placeholder.purpose[cookies.load('site-lang')]}/>}
            />
            <TextField
            fullWidth
            variant="outlined"
            label={langCodeBook.roosite.form.users.AddUser.input.user_phone.placeholder.affiliation[cookies.load('site-lang')]}
            value={phone.company}
            onChange={(event) => affiliationChange(index, event, phones, handlePhones)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_phone ? formikObj.formErrers.user_phone : ""}
            error={formikObj.formTouched.user_phone && Boolean(formikObj.formErrers.user_phone)}
            size='small'
            margin="dense"
            InputProps={{
              endAdornment:(
                  <IconButton size='small' onClick={()=>setPhones(affiliationClear(index, phones))}>
                      <ClearIcon size='small'/>
                  </IconButton>
              ),
              style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
          </div>
        </div>
      ))}
    </Paper>
  )
}

export default PhoneBox;