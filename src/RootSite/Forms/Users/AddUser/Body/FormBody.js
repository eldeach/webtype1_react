// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
//sub form content
import PPI from './SubForm/PPI/PPI';
import EmailBox from './SubForm/EmailBox/EmailBox';
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
    // props로 formFunctions, formikValues(formik의 value들), formikObj(formik 객체)를 받음
    return(
        <div className='add-user-form'>
            <div className='add-user-left-subform'>
                <PPI {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <EmailBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <PhoneBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
                <PositionBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
            </div>
            <div className='add-user-right-subform'>
                <PermissionBox {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>  
            </div>

            
        </div>
    )

}

export default FormBody;