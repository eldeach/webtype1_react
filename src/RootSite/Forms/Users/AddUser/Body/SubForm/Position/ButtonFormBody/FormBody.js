// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useState } from 'react';
// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';

// ======================================================================================== [Import Component] js
//config
import positionLang from '../positionLang';

// ======================================================================================== [Import Component] CSS
import './FormBody.css'


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
    let[jobPosition,setJobPosition] = useState('');
    let[jobTeam,setJobTeam] = useState('');
    let[jobCompany,setJobCompany] = useState('');

    // input필드에서 값 변경 handler (Formik values 업데이트 포함)
    const handleChange = (e) =>{
        if (e.target.name==="job_position") {
            setJobPosition(e.target.value)
            props.formikObj.setFieldValue('job_position',e.target.value)
        }
        else if(e.target.name==="job_team"){
            setJobTeam(e.target.value)
            props.formikObj.setFieldValue('job_team',e.target.value)
        }
        else if(e.target.name==="job_company"){
            setJobCompany(e.target.value)
            props.formikObj.setFieldValue('job_company',e.target.value)
        }
    }

    // input필드에서 값 삭제 handler (Formik values 업데이트 포함)
    const handleClear = (targetName) =>{
        if (targetName==="job_position") {
            setJobPosition('')
            props.formikObj.setFieldValue('job_position','')
        }
        else if(targetName==="job_team"){
            setJobTeam('')
            props.formikObj.setFieldValue('job_team','')
        }
        else if(targetName==="job_company"){
            setJobCompany('')
            props.formikObj.setFieldValue('job_company','')
        }
    }

    return(
        <div className="one-phone-popup">
            <div className='one-phone-item-fields'>
                <TextField
                required
                variant="outlined"
                id="job_position"
                name="job_position"
                label={positionLang.input.job_position.placeholder[cookies.load('site-lang')]}
                value={jobPosition}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.job_position ? props.formikObj.errors.job_position : ""}
                error={props.formikObj.touched.job_position && Boolean(props.formikObj.errors.job_position)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("job_position")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <TextField
                variant="outlined"
                id="job_team"
                name="job_team"
                label={positionLang.input.job_team.placeholder[cookies.load('site-lang')]}
                value={jobTeam}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.job_team ? props.formikObj.errors.job_team : ""}
                error={props.formikObj.touched.job_team && Boolean(props.formikObj.errors.job_team)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("job_team")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <TextField
                variant="outlined"
                id="job_company"
                name="job_company"
                label={positionLang.input.job_company.placeholder[cookies.load('site-lang')]}
                type="text"
                value={jobCompany}
                onChange={(e)=>handleChange(e)}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.job_company ? props.formikObj.errors.job_company : ""}
                error={props.formikObj.touched.job_company && Boolean(props.formikObj.errors.job_company)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{handleClear("job_company")}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='phone-add-button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form={props.formId}>{positionLang.button.subForm.signIn[cookies.load('site-lang')]}</Button>       
            </div>
        </div>
    )
}

export default FormBody;