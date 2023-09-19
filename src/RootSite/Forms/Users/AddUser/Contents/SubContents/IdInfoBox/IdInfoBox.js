// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
// ======================================================================================== [Import Material UI Libaray]  
import { Autocomplete, Button, IconButton, Paper, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../GlobalObject/Configure/Language/langCodeBook';
import SubTitleFactory from '../../../../../../GlobalObject/Factory/SubTitleFactory'

// ======================================================================================== [Import Component] CSS
import './IdInfoBox.css'

function IdInfoBox(props){
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;

    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <SubTitleFactory icon={<FingerprintIcon color='rootsite'/>} text={"Personal Identifiable Information (PII)"}></SubTitleFactory>
            <TextField
            required
            variant="outlined"
            id="user_account"
            name="user_account"
            label={langCodeBook.roosite.form.users.AddUser.input.user_account.placeholder[cookies.load('site-lang')]}
            value={formikValues.user_account}
            onChange={formikObj.formHandleChange}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_account ? formikObj.formErrers.user_account : ""}
            error={formikObj.formTouched.user_account && Boolean(formikObj.formErrers.user_account)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>formikObj.formReset({ values: { user_account: '' } })}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
            <TextField
            required
            variant="outlined"
            id="user_pw"
            name="user_pw"
            label={langCodeBook.roosite.form.users.AddUser.input.user_pw.placeholder[cookies.load('site-lang')]}
            type="password"
            value={formikValues.user_pw}
            onChange={formikObj.formHandleChange}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_pw ? formikObj.formErrers.user_pw : ""}
            error={formikObj.formTouched.user_pw && Boolean(formikObj.formErrers.user_pw)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>formikObj.formReset({ values: { user_pw: '' } })}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
            <TextField
            variant="outlined"
            id="user_name"
            name="user_name"
            label={langCodeBook.roosite.form.users.AddUser.input.user_name.placeholder[cookies.load('site-lang')]}
            value={formikValues.user_name}
            onChange={formikObj.formHandleChange}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_name ? formikObj.formErrers.user_name : ""}
            error={formikObj.formTouched.user_name && Boolean(formikObj.formErrers.user_name)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>formikObj.formReset({ values: { user_name: '' } })}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
            <TextField
            variant="outlined"
            id="user_nickname"
            name="user_nickname"
            label={langCodeBook.roosite.form.users.AddUser.input.user_nickname.placeholder[cookies.load('site-lang')]}
            value={formikValues.user_nickname}
            onChange={formikObj.formHandleChange}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_nickname ? formikObj.formErrers.user_nickname : ""}
            error={formikObj.formTouched.user_nickname && Boolean(formikObj.formErrers.user_nickname)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>formikObj.formReset({ values: { user_nickname: '' } })}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
            <div className='datepicker-box'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    slotProps={{ textField: { size: 'small', fullWidth: true, style: textFieldStyle }}}
                    label={langCodeBook.roosite.form.users.AddUser.input.user_birthday.placeholder[cookies.load('site-lang')]}
                    format="YYYY-MM-DD"
                    mask={"____-__-__"}
                    value={formikValues.user_birthday}
                    // onChange={(newValue) => {
                    //     setBirthday(newValue);
                    // }}
                    renderInput={(params) => <TextField {...params}
                    color="rootsite"/>}
                    />
                </LocalizationProvider>
            </div>
            <div className='option-box '>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <FormLabel id="user_gender" sx={{mr:1}}>Gender</FormLabel>
                <RadioGroup
                row
                name="user_gender"
                value={formikValues.user_gender}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />     
                </RadioGroup>
            </FormControl>
            </div>
        </Paper>
    )
}

export default  IdInfoBox;