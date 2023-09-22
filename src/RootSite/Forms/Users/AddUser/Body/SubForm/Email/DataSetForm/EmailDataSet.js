// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';
import * as yup from 'yup';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


// ======================================================================================== [Import Component] js
import emailLang from './../emailLang';
import emailYupSchema from './emailYupSchema';

// ======================================================================================== [Import Component] CSS
import './EmailDataSet.css'

// 데이터셋 Form
function EmailDataSet(props){

    
    // 상위 폼으로 부터 전달받는 객체 import
    // 1. 부모 Form -> FormikWrapper -> Subform -> 데이터셋Form 으로 전달되는 객체 &
    // 2. 부모 Form에서 전달해주는 paperStyle, textFieldStyle
    // 3. 상위 Subform에서 전달해주는 dataSetHandler
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle, index, dataSetHandler } = props;
    
    // 본 Subform에서 사용될 필드값 정의
    let [emailAddress,setEmailAddress] =useState('')
    let [emailUsage,setEmailUsage] =useState('work')
    let [emailAffiliation,setEmailAffiliation] =useState('')

    const [emailError, setEmailError] = useState('');

    // input필드에서 값 변경 handler (상위 Subform 값 handler 작동 포함)
    const handleChange = (e) =>{
        if (e.target.name=="email_address") {
            setEmailAddress(e.target.value)
            try {
                emailYupSchema.validateSync(e.target.value);
                setEmailError(''); // 유효성 검사 에러가 없을 경우 에러 상태를 초기화합니다.
            } catch (error) {
                setEmailError(error.message); // 유효성 검사 에러 메시지를 상태에 저장합니다.
            }
        }
        else if (e.target.name=="email_usage") {
            setEmailUsage(e.target.value)
        }
        else if (e.target.name=="email_affiliation") {
            setEmailAffiliation(e.target.value)
        }
        dataSetHandler.handleChange(index,e)
    }

    // input필드에서 값 삭제 handler (상위 Subform 값 handler 작동 포함)
    const handleClear = (targetName) =>{
        if (targetName=="email_address") {
            setEmailAddress('')
        }
        else if (targetName=="email_affiliation") {
            setEmailAffiliation('')
        }
        dataSetHandler.handleClear(index,targetName)
    }

    // input필드에서 데이터셋 삭제 handler 실행
    const delBtn=()=>{
        dataSetHandler.handleDelete(index)
    }

    useEffect(()=>{
        // 데이터셋 단위로 핸들링 될 때 필드값 업데이트 
        // 필드에 입력된 텍스트가 데이터셋에 맞춰 업데이트 안되는 것을 방지
        setEmailAddress(dataSetHandler.userEmail[index].email_address)
        setEmailUsage(dataSetHandler.userEmail[index].email_usage)
        setEmailAffiliation(dataSetHandler.userEmail[index].email_affiliation)
    },[dataSetHandler.userEmail[index]]) // 본 데이터셋 form 다루는 인덱스의 배열 요소 값이 업데이트 되는지 모니터링

    

    return(
        <div className='one-email-item'>
            <div className='item-fields'>
            <TextField
            id="email_address"
            name = "email_address"
            fullWidth
            variant="outlined"
            type="email"
            label={emailLang.input.email_address.placeholder[cookies.load('site-lang')]}
            value={emailAddress}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={emailError}
            error={Boolean(emailError)}
            size='small'
            margin="dense"
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
            id="email_affiliation"
            name="email_affiliation"
            fullWidth
            variant="outlined"
            type="email"
            label={emailLang.input.email_affiliation.placeholder[cookies.load('site-lang')]}
            value={emailAffiliation}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            size='small'
            margin="dense"
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
            <div className='item-delete'>
                <Button size="small" variant='contained' style={{height:'100%'}} sx={{padding: 0}} color='error' onClick={()=>delBtn()}><DeleteForeverIcon/></Button>
            </div>
        </div>
    )

}

export default EmailDataSet