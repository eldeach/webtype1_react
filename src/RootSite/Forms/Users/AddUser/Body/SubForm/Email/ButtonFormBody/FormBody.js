// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//icon
import ClearIcon from '@mui/icons-material/Clear';

// ======================================================================================== [Import Component] js
//config
import emailLang from '../emailLang';

// ======================================================================================== [Import Component] CSS
import './FormBody.css'
import { useState } from 'react';

const paperStyle = {
    width:500,
    p: 2,
    mb:2
};

const textFieldStyle={
    fontSize: 14,
    paddingRight:0
}

// 이 FormBody는 SubForm Email.js의 ButtonPopup의 것임
function FormBody(props){

    // 본 Subform에서 사용될 필드값 정의 및 초기값 정의
    // formik 객체에 대한 의존성을 낮추려고 별도 정의
    let[emailAddress,setEmailAddress] = useState('');
    let[emailUsage,setEmailUsage] = useState('personal');
    let[emailAffiliation,setEmailAffiliation] = useState('');

    // input필드에서 값 변경 handler (Formik values 업데이트 포함)
    const handleChange = (e) =>{
        if (e.target.name==="email_address") {
            setEmailAddress(e.target.value)
            props.formikObj.setFieldValue('email_address',e.target.value)
        }
        else if(e.target.name==="email_usage"){
            setEmailUsage(e.target.value)
            props.formikObj.setFieldValue('email_usage',e.target.value)
        }
        else if(e.target.name==="email_affiliation"){
            setEmailAffiliation(e.target.value)
            props.formikObj.setFieldValue('email_affiliation',e.target.value)
        }
    }

    // input필드에서 값 삭제 handler (Formik values 업데이트 포함)
    const handleClear = (targetName) =>{
        if (targetName==="email_address") {
            setEmailAddress('')
            props.formikObj.setFieldValue('email_address','')
        }
        else if(targetName==="email_usage"){
            setEmailUsage('')
            props.formikObj.setFieldValue('email_usage','')
        }
        else if(targetName==="email_affiliation"){
            setEmailAffiliation('')
            props.formikObj.setFieldValue('email_affiliation','')
        }
    }

    return(
        <div className="one-email-popup">
            <div className='one-email-item-fields'>
                <TextField
                required
                variant="outlined"
                id="email_address"
                name="email_address"
                label={emailLang.input.email_address.placeholder[cookies.load('site-lang')]}
                value={emailAddress}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.email_address ? props.formikObj.errors.email_address : ""}
                error={props.formikObj.touched.email_address && Boolean(props.formikObj.errors.email_address)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("email_address")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <div className='one-email-option-box'>
                    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                        <FormLabel id="email_usage" sx={{mr:1}}>{emailLang.input.email_usage.placeholder[cookies.load('site-lang')]}</FormLabel>
                            <RadioGroup
                            row
                            defaultValue={props.initialValues.email_usage}
                            name="email_usage"
                            value={emailUsage}
                            onChange={(e)=>handleChange(e)}
                            >
                                <FormControlLabel value="personal" control={<Radio />} label={emailLang.input.email_usage.optionLabel.personal[cookies.load('site-lang')]} />
                                <FormControlLabel value="work" control={<Radio />} label={emailLang.input.email_usage.optionLabel.work[cookies.load('site-lang')]}/>
                                <FormControlLabel value="other" control={<Radio />} label={emailLang.input.email_usage.optionLabel.other[cookies.load('site-lang')]}/>
                            </RadioGroup>
                    </FormControl>
                </div>
                <TextField
                variant="outlined"
                id="email_affiliation"
                name="email_affiliation"
                label={emailLang.input.email_affiliation.placeholder[cookies.load('site-lang')]}
                type="text"
                value={emailAffiliation}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.email_affiliation ? props.formikObj.errors.email_affiliation : ""}
                error={props.formikObj.touched.email_affiliation && Boolean(props.formikObj.errors.email_affiliation)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("email_affiliation")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='email-add-button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form={props.formId}>{emailLang.button.subForm.signIn[cookies.load('site-lang')]}</Button>       
            </div>
        </div>
    )
}

export default FormBody;