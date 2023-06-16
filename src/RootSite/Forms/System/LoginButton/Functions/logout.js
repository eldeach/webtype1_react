// ======================================================================================== [Import Libaray]
import axios from 'axios';

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function logout(switchLoginStatus){
    await axios.get('/logout')
    .then((res)=>{
        switchLoginStatus(false)
    })
    .catch((error)=>{
        console.log(error.response)

    })

}

export default logout;