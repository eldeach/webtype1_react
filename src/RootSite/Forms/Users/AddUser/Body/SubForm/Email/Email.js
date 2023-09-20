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
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';

// ======================================================================================== [Import Component] js
import emailLang from './emailLang';
import OneEmail from './Component/OneEmail';
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'

// ======================================================================================== [Import Component] CSS
import './Email.css'

function Email(props){

    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;

    const initialEmailValue = { email_address: '', email_usage: 'personal', email_affiliation: '' }
    

    let [userEmail,setUserEmail] = useState([]);


    const handleChange=(index, e)=>{
        let tempUserEmail = [...userEmail]
        tempUserEmail[index][e.target.name] = e.target.value
        setUserEmail(tempUserEmail)
    }

    const handleClear=(index, fieldName)=>{
        let tempUserEmail = [...userEmail]
        tempUserEmail[index][fieldName] = ''
        setUserEmail(tempUserEmail)
    }

    const handleAdd = ()=>{
        let tempUserEmail = [...userEmail]
        tempUserEmail.push(initialEmailValue)
        setUserEmail(tempUserEmail)
    }

    const handleDelete = (index)=>{
        console.log(index)
        const tempUserEmail = [...userEmail]; // userEmail 배열 복사
        tempUserEmail.splice(index, 1); // 해당 인덱스의 요소를 삭제
        setUserEmail(tempUserEmail)
    }

    const handleField = {userEmail, handleChange, handleClear, handleAdd, handleDelete}


    useEffect(()=>{
        formikObj.formSetFieldValue('user_email',[...userEmail])
        console.log(formikValues.user_email)
    },[userEmail])

    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <SubTitle icon={<EmailIcon color='rootsite'/>} text={"E-Mail"}></SubTitle>
            
            {userEmail.map((email, index) => (
                <OneEmail {...props} index={index} handleField={handleField}/>
            ))}

            <Button fullWidth variant='outlined' size='small' color='rootsite' onClick={()=>handleAdd()}><AddIcon size='small'/></Button>
        </Paper>

    )
}

export default Email;