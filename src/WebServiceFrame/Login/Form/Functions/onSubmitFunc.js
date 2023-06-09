
// ======================================================================================== [Import Libaray]
import axios from 'axios';

async function onSubmitFunc(props){
    await axios.post('/local-login',props)
}

export default onSubmitFunc