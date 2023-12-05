// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';

import axios from 'axios';

import moment from 'moment';
import 'moment/locale/ko';	//대한민국

// ======================================================================================== [Import Material UI Libaray]


// ======================================================================================== [Import Component] js
import userRecorderLang from './userRecorderLang'

// Sub Recorder
import PiiRecorder from './SubRecorder/PiiRecorder/PiiRecorder';
import EmailRecorder from './SubRecorder/EmailRecorder/EmailRecorder';
import PhoneRecorder from './SubRecorder/PhoneRecorder/PhoneRecorder';
import PositionRecorder from './SubRecorder/PositionRecorder/PositionRecorder';
import AuthRecorder from './SubRecorder/AuthRecorder/AuthRecorder';
// Popup Form
import ApprovalLine from '../../../../System/Forms/ApprovalLine/ApprovalLine';
// objArrHandler
import doubleArrDelBlankArr from '../../../../System/Components/ArrHandler/doubleArrDelBlankArr'


// ======================================================================================== [Import Component] CSS


function AddUser(props){

    const yupSchema = yup.object().shape({
        user_account: yup.string()
        .required(userRecorderLang.ppiPaper.inputField.user_account.valMsg.required[cookies.load('site-lang')]),
      
        user_pw: yup.string()
        .required(userRecorderLang.ppiPaper.inputField.user_pw.valMsg.required[cookies.load('site-lang')]),
      
        user_pw_confirm: yup.string()
        .oneOf([yup.ref('user_pw'), null], userRecorderLang.ppiPaper.inputField.user_pw_confirm.valMsg.match[cookies.load('site-lang')])
        .required(userRecorderLang.ppiPaper.inputField.user_pw_confirm.valMsg.required[cookies.load('site-lang')]),

        user_name: yup.string()
        .required(userRecorderLang.ppiPaper.inputField.user_name.valMsg.required[cookies.load('site-lang')]),
    });

    // 제정/개정에서 같이 쓰기 위해 initialValues는 외부에서 props로 전달함
    // const initialValues = {
    //     approval_payload :[[]],
    //     user_account: '',
    //     user_pw:'',
    //     user_pw_confirm:'',
    //     user_name:'',
    //     user_nickname:'',
    //     user_birthday:null,
    //     user_gender:'MALE',
    //     user_email:[],
    //     user_phone:[],
    //     user_position:[],
    // }
    
    const [ immediateEffective, setImmediateEffective ] = useState(false);

    const onSubmitFunc = async function (values, actions){

        if ( immediateEffective ) {
            actions.setFieldValue('approval_payload', [[]])
        } else {
            // actions.setFieldValue('approval_payload', doubleArrDelBlankArr( values.approval_payload ))
        }


        if ( !immediateEffective && values.approval_payload.length===1 && values.approval_payload[0].length === 0) {
            alert ("결재라인!")
        } else {          
            const valuePayload = {
                prepared_type : props.preparedType,
                immediate_effective : immediateEffective,
                approval_payload : values.approval_payload,
                previous_approval_payload_id : values.previous_approval_payload_id,
                user_account : values.user_account,
                user_pw : values.user_pw,
                user_name : values.user_name,
                user_nickname : values.user_nickname,
                user_birthday : moment(new Date(values.user_birthday)).format('YYYY-MM-DD'),
                user_gender : values.user_gender,
                user_email : values.user_email,
                user_phone : values.user_phone,
                user_position : values.user_position,
                user_auth : values.user_auth,
                revision_history : values.revision_history
            }
            
            console.log(valuePayload)
            let rs = await axios.post('/addaccount', valuePayload)
            .then(( res ) => {
               return res
            })
            .catch( (error) => {
                return error.response
            })
    
            if (rs.status === 200) {
                actions.resetForm()
            } else if ( rs.status === 452 ) {
                alert (rs.data[cookies.load('site-lang')])
            } else if ( rs.status === 512 ) {
                alert (rs.data[cookies.load('site-lang')])
            }
            console.log(rs)
            if (props.handleModalClose) props.handleModalClose() // 부모가 modal이면 닫아주기
        }
    }

    const { handlePageTitle, handleSystemCode } = props

    useEffect(()=>{
        handlePageTitle(userRecorderLang.formTitle[cookies.load('site-lang')])
        handleSystemCode('sys1')
    },[])


    return(
        <Formik
        validationSchema={yupSchema}
        initialValues={props.initialValues}
        onSubmit={async (values, actions)=>{
            await onSubmitFunc(values, actions)
        }}
        >
            { formikProps => (
                <form
                noValidate
                style={{width:'100%', hegith:'100%', display:'flex', flexDirection:'row'}}
                id = "user_recorder"
                autoComplete='off'
                onSubmit={formikProps.handleSubmit}
                >
                    <div id='UserRecorerA' style={{display:'flex', flexDirection:'column', marginLeft:'auto', boxSizing:'border-box'}} >
                        <ApprovalLine
                        forId = 'user_recorder'
                        inheritedArr = { formikProps.values.approval_payload }
                        updateValue = { function ( newValue ) { formikProps.setFieldValue( 'approval_payload', newValue )}}
                        immediateEffective = { immediateEffective }
                        setImmediateEffective = { setImmediateEffective }
                        />
                    </div>
                    <div id='UserRecorerA' style={{marginLeft:'20px', marginRight:'auto', marginBottom:'20px' ,display:'flex', flexDirection:'column', boxSizing:'border-box'}} >
                        <PiiRecorder
                        preparedType = { props.preparedType }
                        formikProps = { formikProps}
                        />
                        <EmailRecorder
                        inheritedArr = { formikProps.values.user_email }
                        updateValue = { function ( newValue ) { formikProps.setFieldValue( 'user_email', newValue )}}
                        />
                        <PhoneRecorder
                        inheritedArr = { formikProps.values.user_phone }
                        updateValue = { function ( newValue ) { formikProps.setFieldValue( 'user_phone', newValue )}}
                        />
                        <PositionRecorder
                        inheritedArr = { formikProps.values.user_position }
                        updateValue = { function ( newValue ) { formikProps.setFieldValue( 'user_position', newValue )}}
                        />
                        <AuthRecorder
                        inheritedArr = { formikProps.values.user_auth }
                        updateValue = { function ( newValue ) { formikProps.setFieldValue( 'user_auth', newValue )}}
                        />
                    </div>
                </form>
            )}
        </Formik>
    )

}

export default AddUser;