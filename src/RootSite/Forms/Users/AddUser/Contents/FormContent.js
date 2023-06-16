// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Button, Paper, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS
import './FormContent.css'


const paperStyle = {
    width:'20%',
    height:'20%',
    p: 2,
  };

function FormContent(props){

    const { formFunctions, formikValues, formikObj } = props;

    const textFieldStyle={
        fontSize: 14
    }


    return(
        <div>
            <Paper sx={paperStyle} elevation={3}>
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
                inputProps={{style: textFieldStyle}} // font size of input text
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
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <TextField
                required
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
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <TextField
                required
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
                inputProps={{style: textFieldStyle}} // font size of input text
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
                <TextField
                required
                variant="outlined"
                id="user_gender"
                name="user_gender"
                label={langCodeBook.roosite.form.users.AddUser.input.user_gender.placeholder[cookies.load('site-lang')]}
                value={formikValues.user_gender}
                onChange={formikObj.formHandleChange}
                onBlur={formikObj.formHandleBlur}
                helperText={formikObj.formTouched.user_gender ? formikObj.formErrers.user_gender : ""}
                error={formikObj.formTouched.user_gender && Boolean(formikObj.formErrers.user_gender)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </Paper>
            
        </div>
    )

}

export default FormContent;