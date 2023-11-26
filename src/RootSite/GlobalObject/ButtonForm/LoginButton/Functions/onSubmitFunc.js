// ======================================================================================== [Import Libaray]
import axios from 'axios';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function onSubmitFunc(props){

    await axios.post('/local-login' ,props.values)
    .then((res)=>{
        console.log(res)
        console.log(res.status)
        console.log(res.data)
        if (res.status === 200){
            props.formFunctions.switchLoginStatus(true)
        }
        else {
            props.formFunctions.switchLoginStatus(false)
        }
    })
    .catch((error)=>{
        console.log(error)
        console.log(error.response.status)
        console.log(error.response.data)
        props.formFunctions.switchLoginStatus(false)
        if (error.response.data.dr)
        {
            alert("Code : " + error.response.data.msgCode + "\nMessage : " + error.response.data.msg[cookies.load('site-lang')])
        }
        else{
            alert("<unexpected error> \n " + error.response.data)
            
        }

    })
    .finally(()=>{
        props.formFunctions.handleModalClose();
    })
}

export default onSubmitFunc;








