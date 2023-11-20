// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  
import { Button } from '@mui/material';

// ======================================================================================== [Import Component] js
//sub form content
import PPI from './SubForm/PPI/PPI';
import Email from './SubForm/Email/Email';
import Phone from './SubForm/Phone/Phone';
import Position from './SubForm/Position/Position';

// ======================================================================================== [Import Component] CSS
import './FormBody.css'
import { useEffect } from 'react';

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



    useEffect(() => {
        console.log(props)
    },[])

    // props는 FormikWrapper 사용한 부모 폼과 Formik 객체들
    return(
        <div className='add-user-form'>
                <PPI {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Email {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Phone {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Position {...props} paperStyle={paperStyle} textFieldStyle={textFieldStyle}/>
                <Button sx={{width:500, mt:1, mb:10}} size="small" variant="contained" type="submit" form="AddUser">Submit</Button>
        </div>
    )

}

export default FormBody;