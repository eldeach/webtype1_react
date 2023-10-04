// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

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
import phoneLang from './../phoneLang';

// ======================================================================================== [Import Component] CSS
import './PhoneDataSet.css'

// 데이터셋 Form
function PhoneDataSet(props){

    // 상위 폼으로 부터 전달받는 객체 import
    // 1. 부모 Form -> FormikWrapper -> Subform -> 데이터셋Form 으로 전달되는 객체 &
    // 2. 부모 Form에서 전달해주는 paperStyle, textFieldStyle
    // 3. 상위 Subform에서 전달해주는 dataSetHandler
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle, index, dataSetHandler } = props;

    // 본 Subform에서 사용될 필드값 정의
    let [phoneNumber,setPhoneNumber] =useState('')
    let [phoneUsage,setphoneUsage] =useState('work')
    let [phoneAffiliation,setphoneAffiliation] =useState('')


    // input필드에서 값 변경 handler (상위 Subform 값 handler 작동 포함)
    const handleChange = (e) =>{
        if (e.target.name=="phone_number") {
            setPhoneNumber(e.target.value)
        }
        else if (e.target.name=="phone_usage") {
            setphoneUsage(e.target.value)
        }
        else if (e.target.name=="phone_affiliation") {
            setphoneAffiliation(e.target.value)
        }
        dataSetHandler.handleChange(index,e)
    }

    // input필드에서 값 삭제 handler (상위 Subform 값 handler 작동 포함)
    const handleClear = (targetName) =>{
        if (targetName=="phone_number") {
            setPhoneNumber('')
        }
        else if (targetName=="phone_affiliation") {
            setphoneAffiliation('')
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
        setPhoneNumber(dataSetHandler.userPhone[index].phone_number)
        setphoneUsage(dataSetHandler.userPhone[index].phone_usage)
        setphoneAffiliation(dataSetHandler.userPhone[index].phone_affiliation)
    },[dataSetHandler.userPhone[index]]) // 본 데이터셋 form 다루는 인덱스의 배열 요소 값이 업데이트 되는지 모니터링

    return(
        <div className='one-phone-item'>
            <div className='item-fields'>
            <TextField
            id= "phone_number"
            name ="phone_number"
            fullWidth
            variant="outlined"
            type="Phone"
            label={phoneLang.input.phone_number.placeholder[cookies.load('site-lang')]}
            value={phoneNumber}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.handleBlur}
            helperText={formikObj.touched.phone_number ? formikObj.errors.phone_number : ""}
            error={formikObj.touched.phone_number && Boolean(formikObj.errors.phone_number)}
            size='small'
            margin="dense"
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
            id="phone_affiliation"
            name="phone_affiliation"
            fullWidth
            variant="outlined"
            type="Phone"
            label={phoneLang.input.phone_affiliation.placeholder[cookies.load('site-lang')]}
            value={phoneAffiliation}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.handleBlur}
            helperText={formikObj.touched.phone_affiliation ? formikObj.errors.phone_affiliation : ""}
            error={formikObj.touched.phone_affiliation && Boolean(formikObj.errors.phone_affiliation)}
            size='small'
            margin="dense"
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
            <div className='item-delete'>
                <Button size="small" variant='contained' style={{height:'100%'}} sx={{padding: 0}} color='error' onClick={()=>delBtn()}><DeleteForeverIcon/></Button>
            </div>
        </div>
    )

}

export default PhoneDataSet