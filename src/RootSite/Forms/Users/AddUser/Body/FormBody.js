// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//sub form content
import PPI from './SubForm/PPI/PPI';
import Email from './SubForm/Email/Email';
import Phone from './SubForm/Phone/Phone';
import PhoneBox from './SubForm/PhoneBox/PhoneBox';
import PositionBox from './SubForm/PositionBox/PositionBox';
import PermissionBox from './SubForm/PermissionBox/PermissionBox';

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

function FormBody(props){
    // props는 FormikWrapper 사용한 부모 폼과 Formik 객체들
    return(
        <div className='add-user-form'>
            <div className='add-user-left-subform'>
                <PPI {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Email {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Phone {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                {/* <PhoneBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
                <PositionBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>   */}
            </div>
            <div className='add-user-right-subform'>
                {/* <PermissionBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>   */}
            </div>
        </div>
    )

}

export default FormBody;