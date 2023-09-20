// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, Paper, Stack, TextField } from '@mui/material';
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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


// ======================================================================================== [Import Component] js
import emailLang from './../emailLang';

// ======================================================================================== [Import Component] CSS
import './OneEmail.css'


function OneEmail(props){
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle, index, handleField } = props;

    let [emailAddres,setEmailAddres] =useState('')
    let [emailUsage,setEmailUsage] =useState('work')
    let [emailAffiliation,setEmailAffiliation] =useState('')


    const handleChange = (e) =>{
        if (e.target.name=="email_address") {
            setEmailAddres(e.target.value)
        }
        else if (e.target.name=="email_usage") {
            setEmailUsage(e.target.value)
        }
        else if (e.target.name=="email_affiliation") {
            setEmailAffiliation(e.target.value)
        }
        handleField.handleChange(index,e)
    }

    const handleClear = (targetName) =>{
        if (targetName=="email_address") {
            setEmailAddres('')
        }
        else if (targetName=="email_affiliation") {
            setEmailAffiliation('')
        }
        handleField.handleClear(index,targetName)
    }

    const delBtn=()=>{
        handleField.handleDelete(index)
    }

    useEffect(()=>{
        setEmailAddres(handleField.userEmail[index].email_address)
        setEmailUsage(handleField.userEmail[index].email_usage)
        setEmailAffiliation(handleField.userEmail[index].email_affiliation)
    },[handleField.userEmail[index]])

    return(
        <div className='one-email-item'>
            <div className='item-fields'>
            <TextField
            id= "email_address"
            name ="email_address"
            fullWidth
            variant="outlined"
            type="email"
            label={emailLang.input.email_address.placeholder[cookies.load('site-lang')]}
            value={emailAddres}
            onChange={(e)=>handleChange(e)}
            onBlur={formikObj.formHandleBlur}
            helperText={formikObj.formTouched.email_address ? formikObj.formErrers.email_address : ""}
            error={formikObj.formTouched.email_address && Boolean(formikObj.formErrers.email_address)}
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
            helperText={formikObj.formTouched.email_affiliation ? formikObj.formErrers.email_affiliation : ""}
            error={formikObj.formTouched.email_affiliation && Boolean(formikObj.formErrers.email_affiliation)}
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

export default OneEmail