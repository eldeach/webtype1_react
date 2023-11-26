// ======================================================================================== [Import Libaray]
import axios from 'axios';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function onSubmitFunc(props){
    console.log("AA")
    console.log(props)
    
    const valuePayload = {
        user_account: props.values.user_account,
        user_pw:props.values.user_pw,
        user_pw_confirm:props.values.user_pw_confirm,
        user_name:props.values.user_name,
        user_nickname:props.values.user_nickname,
        user_birthday:props.values.user_birthday,
        user_email:props.values.user_email,
        user_phone:props.values.user_phone,
        user_position:props.values.user_position,
    }

    console.log(valuePayload)

    props.formikObj.resetForm()
}

export default onSubmitFunc;








