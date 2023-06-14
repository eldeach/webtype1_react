// ======================================================================================== [Import Libaray]
import axios from 'axios';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function onSubmitFunc(props){

    await axios.post('/local-login' ,props.values)
    .then((res)=>{
        console.log(res.data)

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
            console.log(error.response.status)
            console.log((error.response.data.dr))
            console.log((error.response.data.msgCode))
            console.log((error.response.data.msg[cookies.load('site-lang')]))
        }
        else{
            console.log("unexpected")
            console.log(error.response.status)
            console.log(error.response.data.dr)
            console.log((error.response.data.msgCode))
            console.log((error.response.data.msg))
        }

    })
}

export default onSubmitFunc;








