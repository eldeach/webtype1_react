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
import phoneLang from '../phoneLang';

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

// 이 FormBody는 SubForm Phone.js의 ButtonPopup의 것임
function FormBody(props){

    // 본 Subform에서 사용될 필드값 정의 및 초기값 정의
    // formik 객체에 대한 의존성을 낮추려고 별도 정의
    let[phoneNumber,setPhoneNumber] = useState('');
    let[phoneUsage,setPhoneUsage] = useState('personal');
    let[phoneAffiliation,setPhoneAffiliation] = useState('');

    // input필드에서 값 변경 handler (Formik values 업데이트 포함)
    const handleChange = (e) =>{
        if (e.target.name==="phone_number") {
            setPhoneNumber(e.target.value)
            props.formikObj.setFieldValue('phone_number',e.target.value)
        }
        else if(e.target.name==="phone_usage"){
            setPhoneUsage(e.target.value)
            props.formikObj.setFieldValue('phone_usage',e.target.value)
        }
        else if(e.target.name==="phone_affiliation"){
            setPhoneAffiliation(e.target.value)
            props.formikObj.setFieldValue('phone_affiliation',e.target.value)
        }
    }

    // input필드에서 값 삭제 handler (Formik values 업데이트 포함)
    const handleClear = (targetName) =>{
        if (targetName==="phone_number") {
            setPhoneNumber('')
            props.formikObj.setFieldValue('phone_number','')
        }
        else if(targetName==="phone_usage"){
            setPhoneUsage('')
            props.formikObj.setFieldValue('phone_usage','')
        }
        else if(targetName==="phone_affiliation"){
            setPhoneAffiliation('')
            props.formikObj.setFieldValue('phone_affiliation','')
        }
    }

    return(
        <div className="one-phone-popup">
            <div className='one-phone-item-fields'>
                <TextField
                required
                variant="outlined"
                id="phone_number"
                name="phone_number"
                label={phoneLang.input.phone_number.placeholder[cookies.load('site-lang')]}
                value={phoneNumber}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.phone_number ? props.formikObj.errors.phone_number : ""}
                error={props.formikObj.touched.phone_number && Boolean(props.formikObj.errors.phone_number)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("phone_number")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <div className='one-phone-option-box'>
                    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                        <FormLabel id="phone_usage" sx={{mr:1}}>{phoneLang.input.phone_usage.placeholder[cookies.load('site-lang')]}</FormLabel>
                            <RadioGroup
                            row
                            defaultValue={props.initialValues.phone_usage}
                            name="phone_usage"
                            value={phoneUsage}
                            onChange={(e)=>handleChange(e)}
                            >
                                <FormControlLabel value="personal" control={<Radio />} label={phoneLang.input.phone_usage.optionLabel.personal[cookies.load('site-lang')]} />
                                <FormControlLabel value="work" control={<Radio />} label={phoneLang.input.phone_usage.optionLabel.work[cookies.load('site-lang')]}/>
                                <FormControlLabel value="other" control={<Radio />} label={phoneLang.input.phone_usage.optionLabel.other[cookies.load('site-lang')]}/>
                            </RadioGroup>
                    </FormControl>
                </div>
                <TextField
                variant="outlined"
                id="phone_affiliation"
                name="phone_affiliation"
                label={phoneLang.input.phone_affiliation.placeholder[cookies.load('site-lang')]}
                type="text"
                value={phoneAffiliation}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.phone_affiliation ? props.formikObj.errors.phone_affiliation : ""}
                error={props.formikObj.touched.phone_affiliation && Boolean(props.formikObj.errors.phone_affiliation)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("phone_affiliation")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='phone-add-button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form={props.formId}>{phoneLang.button.subForm.signIn[cookies.load('site-lang')]}</Button>       
            </div>
        </div>
    )
}

export default FormBody;