// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, Paper, Chip } from '@mui/material';
//icon
import AddIcon from '@mui/icons-material/Add';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// ======================================================================================== [Import Component] js
import ButtonPopup from '../../../../../../GlobalObject/Factory/ButtonPopup'
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'
import onSubmitFunc from './Functions/onSubmitFunc';
import FormBody from './Body/FormBody'
//config
import yupSchema from './Body/yupSchema';
import emailLang from './emailLang';
// ======================================================================================== [Import Component] CSS
import './Email.css'

function Email(props){

    // 본 Subform에서 사용될 필드값 정의
    let [userEmails,setUserEmails] = useState([]);
    // 데이터셋 초기값 정의 (데이터셋 단위로 배열에 관리해야하기 때문에 별도 정의)
    const initialPopUplValues = {
        email_address: '',
        email_usage: 'personal',
        email_affiliation: ''
    }

    // Pop up form 사이즈
    const popUpFormSize={
        width: 400,
        height:300,
      }

    // 데이터셋 추가 handler
    const handleAdd = (newValue)=>{
        let tempUserEmails = [...userEmails]
        tempUserEmails.push(newValue)
        setUserEmails(tempUserEmails)
    }

    // 데이터셋 삭제 handler
    const handleDel = (index)=>{
        const tempUserEmails = [...userEmails];
        tempUserEmails.splice(index, 1);
        setUserEmails(tempUserEmails)
    }
    
    useEffect(()=>{
        props.formikObj.setFieldValue('user_email',[...userEmails])
        console.log(props.formikObj.values.uesr_email)
    },[userEmails]) // 데이터셋 userEmails 변경될 때마다 작동


    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <div className='email-header'>
                <SubTitle icon={<EmailIcon color='rootsite'/>} text={"E-Mail"}></SubTitle>
                <div style={{flexGrow:1}}/>
                <ButtonPopup
                //Button Popup 고유 props 시작 --->
                // button 스타일 및 text 정의
                buttonVariant="contained"
                buttonColor="rootsite"
                buttonSx={{padding: 0}}
                buttonText={<AddIcon size='small'/>}
                // Popup 제목 스타일 정의
                titleFontSize="x-large"
                popupTitle={emailLang.text.popupTitle[cookies.load('site-lang')]}
                //<--- Button Popup 고유 props 끝
                formSize={popUpFormSize}
                formBody={FormBody}
                initialValues={initialPopUplValues}
                yupSchema={yupSchema}
                formFunctions={{onSubmitFunc, handleAdd}}
                formId="AddEmailInfo"
                autoComplete="off"
                />
            </div>
            {
                userEmails.map((email, index)=>( // 추가된 이메일 정보 출력 array iterator
                    <div className='one-email-item'>
                        <div className='delete-email-item'>
                            <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>handleDel(index)}><DeleteForeverIcon/></Button>
                        </div>
                        <div className='one-email-info'>
                            <Chip size="small" icon={<AlternateEmailIcon size="small"/>} color="rootsite" label={email.email_address}/>
                            <div className='one-email-sub-info'>
                                <Chip size="small" icon={<CategoryIcon size="small"/>} color="rootsite" variant="outlined" label={email.email_usage}/>
                                <Chip size="small" sx={{width:'100%',ml:0.8}} icon={<BusinessIcon size="small"/>} color="rootsite" variant="outlined" label={email.email_affiliation}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Paper>
    )
}

export default Email;