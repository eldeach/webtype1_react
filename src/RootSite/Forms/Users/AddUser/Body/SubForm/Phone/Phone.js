// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, Paper, Chip } from '@mui/material';
//icon
import AddIcon from '@mui/icons-material/Add';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// ======================================================================================== [Import Component] js
import ButtonPopup from '../../../../../../GlobalObject/Factory/ButtonPopup'
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'
import onSubmitFunc from './Functions/onSubmitFunc';
import FormBody from './ButtonFormBody/FormBody'
//config
import yupSchema from './ButtonFormBody/yupSchema';
import phoneLang from './phoneLang';
// ======================================================================================== [Import Component] CSS
import './Phone.css'

// 데이터셋 단위 입력 SubForm
function Phone(props){

    // 본 Subform에서 사용될 필드값 정의
    // formik 객체에 대한 의존성을 낮추려고 별도 정의
    let [userPhones,setUserPhones] = useState([]);

    // 배열요소에 대한 데이터셋 초기값 정의
    const initialValues = {
        phone_number: '',
        phone_usage: 'personal',
        phone_affiliation: ''
    }

    // 배열 요소 추가 handler (Formik values 업데이트 기능 useEffect 정의)
    const handleAdd = (newValue)=>{
        let tempUserPhones = [...userPhones]
        tempUserPhones.push(newValue)
        setUserPhones(tempUserPhones)
    }

    // 배열 요소 삭제 handler - formik value 객체는 useEffect에서 업데이트
    const handleDel = (index)=>{
        let tempUserPhones = [...userPhones];
        tempUserPhones.splice(index, 1);
        setUserPhones(tempUserPhones)
    }
    
    // formik values 업데이트 handler
    useEffect(()=>{
        props.formikObj.setFieldValue('user_phone',[...userPhones])
    },[userPhones]) 

    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <SubTitle icon={<ContactPhoneIcon color='rootsite'/>} text={"Phone"}></SubTitle>
            { // 현재 폰s 배열 객체 정보 출력 iterator
                userPhones.map((phone, index)=>(
                <div className='one-phone-item'>
                        <div className='one-phone-info'>
                            <Chip size="small" icon={<PhoneIcon size="small"/>} color="rootsite" label={phone.phone_number}/>
                            <div className='one-email-sub-info'>
                                <Chip size="small" icon={<CategoryIcon size="small"/>} color="rootsite" variant="outlined" label={phone.phone_usage}/>
                                <Chip size="small" sx={{width:'100%',ml:0.8}} icon={<BusinessIcon size="small"/>} color="rootsite" variant="outlined" label={phone.phone_affiliation}/>
                            </div>
                        </div>
                        <div className='delete-email-item'>
                            <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>handleDel(index)}><DeleteForeverIcon/></Button>
                        </div>
                    </div>
                ))
            }
            <ButtonPopup
            // 배열에 요소 추가하는 input 필드 Popup Form
            // Button Popup 고유 props 시작 --->
            // button 스타일 및 text 정의
            buttonFullWidth={true}
            buttonVariant="outlined"
            buttonColor="rootsite"
            buttonSx={{padding: 0}}
            buttonText={<AddIcon/>}
            // Popup 제목 스타일 정의
            titleFontSize="x-large"
            popupTitle={
                <div>
                    <ContactPhoneIcon color="rootsite" fontSize="large"/>
                    <AddCircleIcon color="rootsite" fontSize="small" sx={{ml:-0.6, mb:2.5}}/>
                </div>
            }
            //<--- Button Popup 고유 props 끝
            formSize={{width: 400, height:300}}
            formBody={FormBody}
            initialValues={initialValues}
            yupSchema={yupSchema}
            formFunctions={{onSubmitFunc, handleAdd}}
            formId="AddEmailInfo"
            autoComplete="off"
            />
        </Paper>

    )
}

export default Phone;