// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Autocomplete, Button, IconButton, Paper, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../GlobalObject/Configure/Language/langCodeBook';
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'
import emailCat from './Components/emailCat'
import emailsClear from './Components/emailsClear';
import emailChange from './Components/emailChange';
import purposeChange from './Components/purposeChange';
import affiliationClear from './Components/affiliationClear';
import affiliationChange from './Components/affiliationChange';

// ======================================================================================== [Import Component] CSS
import './EmailBox.css'


function EmailBox(props){
  const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;
  const initialEmailValue = { email: '', type: 'personal', company: '' }
  const emailRegExp =/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/; 

  const [emails, setEmails] = useState([]);
  const handleEmails = (arr) => {setEmails(arr)}

  const addField = () => {
    if (emails[emails.length-1].email.trim() !== ''){
      const newEmails = [...emails, initialEmailValue];
      handleEmails(newEmails);
    }
  };

  const removeField = (index) => {
    const oldEmailsArray = [...emails]; // 원본 배열 복사
    const newEmailsArray = oldEmailsArray.filter((_, i) => i !== index); 
    handleEmails(newEmailsArray)
  };

  const handleFormValueChange = () =>{
    formikObj.formSetFieldValue('user_email',emails)
  }

  useEffect(()=>{
    handleFormValueChange();
    console.log(formikValues)
  },[emails])

  return(
    <Paper sx={paperStyle} elevation={3}>
      <SubTitle icon={<EmailIcon color='rootsite'/>} text={"E-Mail"}></SubTitle>
      {
        emails.length < 1 ? 
        <div className='contact-plus-button-box'>
        <Button fullWidth variant='outlined' size='small' color='rootsite' onClick={()=>setEmails([initialEmailValue])}><AddIcon size='small'/></Button>
        </div>
        :<div></div>
      }
      
      {emails.map((email, index) => (
        <div className='contact-field-box' key={index}>
          <TextField
          fullWidth
          variant="outlined"
          type="email"
          label={langCodeBook.roosite.form.users.AddUser.input.user_email.placeholder.emailField[cookies.load('site-lang')]}
          value={email.email}
          onChange={(event) => emailChange(index, event, emails, handleEmails, addField, removeField)}
          onBlur={formikObj.formHandleBlur}
          helperText={!emailRegExp.test(email.email) ? langCodeBook.roosite.form.users.AddUser.input.user_email.yup.emailField[cookies.load('site-lang')]:""}
          error={!emailRegExp.test(email.email)}
          size='small'
          margin="dense"
          InputProps={{
            endAdornment:(
              <IconButton size='small' onClick={()=>setEmails(emailsClear(index, emails))}>
                  <ClearIcon size='small'/>
              </IconButton>
            ),
            style: textFieldStyle // font size of input text
          }}
          InputLabelProps={{style: textFieldStyle}} // font size of input label
          />
          <div className='contact-box-2'>
            <Autocomplete
            options={emailCat}
            getOptionLabel={(option) => option.label}
            size="small"
            sx={{width:260}}
            value={emailCat.find((option) => option.value === email.type)}
            onChange={(event, value) => purposeChange(index, event, value, emails, handleEmails)}
            renderInput={(params) => <TextField {...params}
            label={langCodeBook.roosite.form.users.AddUser.input.user_email.placeholder.purpose[cookies.load('site-lang')]}/>}
            />
            <TextField
            fullWidth
            variant="outlined"
            label={langCodeBook.roosite.form.users.AddUser.input.user_email.placeholder.affiliation[cookies.load('site-lang')]}
            value={email.company}
            onChange={(event) => affiliationChange(index, event, emails, handleEmails)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_email ? formikObj.formErrers.user_email : ""}
            error={formikObj.formTouched.user_email && Boolean(formikObj.formErrers.user_email)}
            size='small'
            margin="dense"
            InputProps={{
              endAdornment:(
                  <IconButton size='small' onClick={()=>setEmails(affiliationClear(index, emails))}>
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

export default EmailBox;