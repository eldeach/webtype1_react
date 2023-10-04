// ======================================================================================== [Import Libaray]
import axios from 'axios';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function onSubmitFunc(props){

    await axios.post('/local-login' ,props.values)
    .then((res)=>{
        if (res.data.dr && res.data.msgCode === "msg1"){
            props.formFunctions.switchLoginStatus(true)
        }
        else {
            props.formFunctions.switchLoginStatus(false)
        }
        props.formFunctions.handleModalClose();
    })
    .catch((error)=>{
        props.formFunctions.switchLoginStatus(false)
        if (error.response.data.dr)
        {
            alert("Code : " + error.response.data.msgCode + "\nMessage : " + error.response.data.msg[cookies.load('site-lang')])
            props.formFunctions.handleModalClose();
        }
        else{
            alert("<unexpected error> \n " + error.response.data)
            props.formFunctions.handleModalClose();
        }

    })
}

export default onSubmitFunc;








