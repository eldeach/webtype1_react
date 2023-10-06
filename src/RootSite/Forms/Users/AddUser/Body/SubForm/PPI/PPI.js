// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

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
import ppiLang from './ppiLang';
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'

// ======================================================================================== [Import Component] CSS
import './PPI.css'

// 필드단위 입력 SubForm
function IdInfoBox(props){

    // 본 Subform에서 사용될 필드값 정의 및 초기값 정의
    // formik 객체에 대한 의존성을 낮추려고 별도 정의
    let [userAccount,setUserAccount] = useState('')
    let [userPW,setUserPW] = useState('')
    let [userPWConfirm,setUserPWConfirm] = useState('')
    let [userName,setUserName] = useState('')
    let [userNickname,setUserNickname] = useState('')
    let [userBirthday,setUserBirthday] = useState(null)
    let [userGender,setUserGender] = useState("male")

    // input필드에서 값 변경 handler (Formik values 업데이트 포함)
    const handleChange = (e) =>{
        if (e.target.name==="user_account") {
            setUserAccount(e.target.value)
            props.formikObj.setFieldValue('user_account',e.target.value)
        }
        else if(e.target.name==="user_pw"){
            setUserPW(e.target.value)
            props.formikObj.setFieldValue('user_pw',e.target.value)
        }
        else if(e.target.name==="user_pw_confirm"){
            setUserPWConfirm(e.target.value)
            props.formikObj.setFieldValue('user_pw_confirm',e.target.value)
        }
        else if(e.target.name==="user_name"){
            setUserName(e.target.value)
            props.formikObj.setFieldValue('user_name',e.target.value)
        }
        else if(e.target.name==="user_nickname"){
            setUserNickname(e.target.value)
            props.formikObj.setFieldValue('user_nickname',e.target.value)
        }
        else if(e.target.name==="user_birthday"){
            setUserBirthday(e.target.value)
            props.formikObj.setFieldValue('user_birthday',e.target.value)
        }
        else if(e.target.name==="user_gender"){
            setUserGender(e.target.value)
            props.formikObj.setFieldValue('user_gender',e.target.value)
        }
    }

    // input필드에서 값 삭제 handler (Formik values 업데이트 포함)
    const handleClear = (targetName) =>{
        if (targetName==="user_account") {
            setUserAccount('')
            props.formikObj.setFieldValue('user_account','')
        }
        else if(targetName==="user_pw"){
            setUserPW('')
            props.formikObj.setFieldValue('user_pw','')
        }
        else if(targetName==="user_pw_confirm"){
            setUserPWConfirm('')
            props.formikObj.setFieldValue('user_pw_confirm','')
        }
        else if(targetName==="user_name"){
            setUserName('')
            props.formikObj.setFieldValue('user_name','')
        }
        else if(targetName==="user_nickname"){
            setUserNickname('')
            props.formikObj.setFieldValue('user_nickname','')
        }
    }
    
    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <SubTitle icon={<FingerprintIcon color='rootsite'/>} text={"Personal Identifiable Information (PII)"}></SubTitle>
            <TextField
            required
            variant="outlined"
            id="user_account"
            name="user_account"
            label={ppiLang.input.user_account.placeholder[cookies.load('site-lang')]}
            value={userAccount}
            onChange={(e)=>handleChange(e)}
            onBlur={props.formikObj.handleBlur}
            helperText={props.formikObj.touched.user_account ? props.formikObj.errors.user_account : ""}
            error={props.formikObj.touched.user_account && Boolean(props.formikObj.errors.user_account)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_account")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: props.textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: props.textFieldStyle}} // font size of input label
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
            onBlur={props.formikObj.handleBlur}
            helperText={props.formikObj.touched.user_pw ? props.formikObj.errors.user_pw : ""}
            error={props.formikObj.touched.user_pw && Boolean(props.formikObj.errors.user_pw)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_pw")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: props.textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: props.textFieldStyle}} // font size of input label
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
            onBlur={props.formikObj.handleBlur}
            helperText={props.formikObj.touched.user_pw_confirm ? props.formikObj.errors.user_pw_confirm : ""}
            error={props.formikObj.touched.user_pw_confirm && Boolean(props.formikObj.errors.user_pw_confirm)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_pw_confirm")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: props.textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: props.textFieldStyle}} // font size of input label
            />
            <TextField
            variant="outlined"
            id="user_name"
            name="user_name"
            label={ppiLang.input.user_name.placeholder[cookies.load('site-lang')]}
            value={userName}
            onChange={(e)=>handleChange(e)}
            onBlur={props.formikObj.handleBlur}
            helperText={props.formikObj.touched.user_name ? props.formikObj.errors.user_name : ""}
            error={props.formikObj.touched.user_name && Boolean(props.formikObj.errors.user_name)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_name")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: props.textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: props.textFieldStyle}} // font size of input label
            />
            <TextField
            variant="outlined"
            id="user_nickname"
            name="user_nickname"
            label={ppiLang.input.user_nickname.placeholder[cookies.load('site-lang')]}
            value={userNickname}
            onChange={(e)=>handleChange(e)}
            onBlur={props.formikObj.handleBlur}
            helperText={props.formikObj.touched.user_nickname ? props.formikObj.errors.user_nickname : ""}
            error={props.formikObj.touched.user_nickname && Boolean(props.formikObj.errors.user_nickname)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("user_nickname")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: props.textFieldStyle // font size of input text
            }}
            InputLabelProps={{style: props.textFieldStyle}} // font size of input label
            />
            <div className='ppi-datepicker-box'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    id="user_birthday"
                    name="user_birthday"
                    slotProps={{ textField: { size: 'small', fullWidth: true, style: props.textFieldStyle }}}
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