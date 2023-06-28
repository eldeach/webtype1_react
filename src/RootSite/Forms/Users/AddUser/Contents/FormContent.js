// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//sub form content
import IdInfoBox from './SubContents/IdInfoBox/IdInfoBox';
import EmailBox from './SubContents/EmailBox/EmailBox';
import PhoneBox from './SubContents/PhoneBox/PhoneBox';
import PositionBox from './SubContents/PositionBox/PositionBox';
import AuthBox from './SubContents/AuthBox/AuthBox';

// ======================================================================================== [Import Component] CSS
import './FormContent.css'

const paperStyle = {
    width:500,
    p: 2,
    mb:2
};

const textFieldStyle={
    fontSize: 14,
    paddingRight:0
}

function FormContent(props){
    // Form Content는 GlobalFormik을 사용하는 컴포넌트에서 formFunctions에 넣은 모든 Function을 사용할 수 있음.
    // FormContent는 모든 formik 객체 (값, 내장함수, 리스너)가 GlobalFormik에서 전달해줌   
    return(
        <div className='form-content'>
            <div className='left-content'>
                <IdInfoBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <EmailBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <PhoneBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
                <PositionBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
            </div>
            <div className='right-content'>
                <AuthBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
            </div>

            
        </div>
    )

}

export default FormContent;