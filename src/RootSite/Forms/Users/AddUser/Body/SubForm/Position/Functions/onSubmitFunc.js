// ======================================================================================== [Import Libaray]
import axios from 'axios';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


async function onSubmitFunc(props){
    props.formFunctions.handleAdd(props.values)
    props.formFunctions.handleModalClose()
}

export default onSubmitFunc;








