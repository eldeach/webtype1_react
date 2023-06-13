// ======================================================================================== [Import Libaray]
import axios from 'axios';

async function getMsgCodeBook(){
    await axios.post('/local-login' ,props.values)
    .then((res)=>{
        console.log(res.data)
        props.formFunctions.modalFunc.handleModalClose();
    })
    .catch((error)=>{
        if (error.response.data.dr)
        {
            console.log(error.response.status)
            console.log((error.response.data.dr))
            console.log((error.response.data.msgCode))
            console.log((error.response.data.msg))
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

export default getMsgCodeBook;