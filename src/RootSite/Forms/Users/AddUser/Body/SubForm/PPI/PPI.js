// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, Paper, TextField } from '@mui/material';
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
// import langCodeBook from '../../../../../../GlobalObject/Configure/Language/langCodeBook';
import ppiLang from './ppiLang';
import SubTitleFactory from '../../../../../../GlobalObject/Factory/SubTitleFactory'

// ======================================================================================== [Import Component] CSS
import './PPI.css'

function IdInfoBox(props){
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;

    //
    let [userAccount,setUserAccount] = useState('')
    let [userPW,setUserPW] = useState('')
    let [userPWConfirm,setUserPWConfirm] = useState('')
    let [userName,setUserName] = useState('')
    let [userNickname,setUserNickname] = useState('')
    let [userBirthday,setUserBirthday] = useState(null)
    let [userGender,setUserGender] = useState('')

    const handleChange = (e) =>{
        if (e.target.name=="user_account") {
            setUserAccount(e.target.value)
            // formikObj.formReset({ values: { user_account: e.target.value } })
            formikObj.formSetFieldValue('user_account',e.target.value)
        }
        else if(e.target.name=="user_pw"){
            setUserPW(e.target.value)
            formikObj.formSetFieldValue('user_pw',e.target.value)
        }
        else if(e.target.name=="user_pw_confirm"){
            setUserPWConfirm(e.target.value)
            formikObj.formSetFieldValue('user_pw_confirm',e.target.value)
        }
        else if(e.target.name=="user_name"){
            setUserName(e.target.value)
            formikObj.formSetFieldValue('user_name',e.target.value)
        }
        else if(e.target.name=="user_nickname"){
            setUserNickname(e.target.value)
            formikObj.formSetFieldValue('user_nickname',e.target.value)
        }
        else if(e.target.name=="user_birthday"){
            setUserBirthday(e.target.value)
            formikObj.formSetFieldValue('user_birthday',e.target.value)
        }
        else if(e.target.name=="user_gender"){
            setUserGender(e.target.value)
            formikObj.formSetFieldValue('user_gender',e.target.value)
        }
    }

    const handleClear = (targetName) =>{
        if (targetName=="user_account") {
            setUserAccount('')
            formikObj.formSetFieldValue('user_account','')
        }
        else if(targetName=="user_pw"){
            setUserPW('')
            formikObj.formSetFieldValue('user_pw','')
        }
        else if(targetName=="user_pw_confirm"){
            setUserPWConfirm('')
            formikObj.formSetFieldValue('user_pw_confirm','')
        }
        else if(targetName=="user_name"){
            setUserName('')
            formikObj.formSetFieldValue('user_name','')
        }
        else if(targetName=="user_nickname"){
            setUserNickname('')
            formikObj.formSetFieldValue('user_nickname','')
        }
    }
    
    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <Button size="small" variant="contained" type="submit" form='AddUser'>Submit 테스트</Button>
            <SubTitleFactory icon={<FingerprintIcon color='rootsite'/>} text={"Personal Identifiable Information (PII)"}></SubTitleFactory>
            <TextField
            required
            variant="outlined"
            id="user_account"
            name="user_account"
            label={ppiLang.input.user_account.placeholder[cookies.load('site-lang')]}
            value={userAccount}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_account ? formikObj.formErrers.user_account : ""}
            error={formikObj.formTouched.user_account && Boolean(formikObj.formErrers.user_account)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_account")}}>
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
            label={ppiLang.input.user_pw.placeholder[cookies.load('site-lang')]}
            type="password"
            value={userPW}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_pw ? formikObj.formErrers.user_pw : ""}
            error={formikObj.formTouched.user_pw && Boolean(formikObj.formErrers.user_pw)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_pw")}}>
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
            id="user_pw_confirm"
            name="user_pw_confirm"
            label={ppiLang.input.user_pw_confirm.placeholder[cookies.load('site-lang')]}
            type="password"
            value={userPWConfirm}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_pw_confirm ? formikObj.formErrers.user_pw_confirm : ""}
            error={formikObj.formTouched.user_pw_confirm && Boolean(formikObj.formErrers.user_pw_confirm)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_pw_confirm")}}>
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
            label={ppiLang.input.user_name.placeholder[cookies.load('site-lang')]}
            value={userName}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_name ? formikObj.formErrers.user_name : ""}
            error={formikObj.formTouched.user_name && Boolean(formikObj.formErrers.user_name)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_name")}}>
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
            label={ppiLang.input.user_nickname.placeholder[cookies.load('site-lang')]}
            value={userNickname}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.user_nickname ? formikObj.formErrers.user_nickname : ""}
            error={formikObj.formTouched.user_nickname && Boolean(formikObj.formErrers.user_nickname)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_nickname")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: textFieldStyle}} // font size of input label
            />
            <div className='ppi-datepicker-box'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    id="user_birthday"
                    name="user_birthday"
                    slotProps={{ textField: { size: 'small', fullWidth: true, style: textFieldStyle }}}
                    label={ppiLang.input.user_birthday.placeholder[cookies.load('site-lang')]}
                    format="YYYY-MM-DD"
                    mask={"____-__-__"}
                    value={userBirthday}
                    onChange={(newValue)=>{handleChange({ target:{name:'user_birthday',value:newValue}})}}
                    renderInput={(params) => <TextField {...params}
                    color="rootsite"/>}
                    />
                </LocalizationProvider>
            </div>
            <div className='ppi-option-box'>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <FormLabel id="user_gender" sx={{mr:1}}>Gender</FormLabel>
                <RadioGroup
                row
                name="user_gender"
                value={userGender}
                onChange={(e)=>handleChange(e)}
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