// ======================================================================================== [Import Libaray] Material UI
import { Chip } from '@mui/material/';

// ======================================================================================== [Import Libaray] Material Icon
import LockPersonIcon from '@mui/icons-material/LockPerson';

// ======================================================================================== [Import Component] CSS
import './FormContent.css'

function FormContent(){
    return(
        <div className="form-content">
            <Chip icon={<LockPersonIcon/>} size="small" label="Sign in" color="primary"/>

        </div>
    )

}

export default FormContent;