// ======================================================================================== [Import Libaray]
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Button, Paper } from '@mui/material';
//icon
import AddIcon from '@mui/icons-material/Add';
import PhoneIcon from '@mui/icons-material/Phone';

// ======================================================================================== [Import Component] js
import phoneLang from './phoneLang';
import PhoneDataSet from './DataSetForm/PhoneDataSet';
import SubTitle from '../../../../../../GlobalObject/Component/SubTitle'

// ======================================================================================== [Import Component] CSS
import './Phone.css'

// 데이터셋 단위 입력 SubForm
function Phone(props){
    // 본 Subform에서 사용될 필드값 정의
    let [userPhone,setUserPhone] = useState([]);
    // 데이터셋 초기값 정의 (데이터셋 단위로 배열에 관리해야하기 때문에 별도 정의)
    const initialPhoneValue = { Phone_address: '', Phone_usage: 'personal', Phone_affiliation: '' }

    // input필드에서 값 변경 handler
    const handleChange=(index, e)=>{
        let tempUserPhone = [...userPhone]
        tempUserPhone[index][e.target.name] = e.target.value
        setUserPhone(tempUserPhone)
    }

    // input필드에서 값 삭제 handler
    const handleClear=(index, fieldName)=>{
        let tempUserPhone = [...userPhone]
        tempUserPhone[index][fieldName] = ''
        setUserPhone(tempUserPhone)
    }
    
    // input필드에서 데이터셋 추가 handler
    const handleAdd = ()=>{
        let tempUserPhone = [...userPhone]
        tempUserPhone.push(initialPhoneValue)
        setUserPhone(tempUserPhone)
    }
    
    // input필드에서 데이터셋 삭제 handler
    const handleDelete = (index)=>{
        console.log(index)
        const tempUserPhone = [...userPhone];
        tempUserPhone.splice(index, 1);
        setUserPhone(tempUserPhone)
    }

    // 데이터셋 입력 하위 폼에 전달할 데이터 변수 및 handler object 선언
    // 데이터셋을 다룰 하위폼 {데이터셋array}.map으로 생성할 때 전달되어야 함.
    const dataSetHandler = {userPhone, handleChange, handleClear, handleAdd, handleDelete}

    useEffect(()=>{
        // 본 Subform 배열 변수 변경 감지 시 Formik의 values 업데이트
        // 배열 단위가 Formik의 values이면 handler에서 업데이트하는것으로 하면 중복코드가 발생되어 useEffect 활용함
        props.formikObj.setFieldValue('user_Phone',[...userPhone])
        console.log(props.formikObj.values.user_Phone)
    },[userPhone])

    return(
        <Paper sx={props.paperStyle} elevation={3}>
            <SubTitle icon={<PhoneIcon color='rootsite'/>} text={"Phone"}></SubTitle>
            
            {/* 데이터셋 단위 하위 폼, 배열 개수 만큼 생성 */}
            {userPhone.map((Phone, index) => (
                <PhoneDataSet {...props} index={index} dataSetHandler={dataSetHandler}/>
            ))}

            <Button fullWidth variant='outlined' size='small' color='rootsite' onClick={()=>handleAdd()}><AddIcon size='small'/></Button>
        </Paper>

    )
}

export default Phone;