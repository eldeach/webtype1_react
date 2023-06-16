// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS
import './FormContent.css'
import { useEffect, useState } from 'react';

function FormContent(props){
    const { formFunctions, formikValues, formikObj } = props;

    const textFieldStyle={
        fontSize: 14
    }

    let [siteLang,setSiteLang] = useState('');
    const handleLang = (event) => {
        setSiteLang(event.target.value)
        formFunctions.setCookies(event.target.value)
    }

    useEffect(() => {
        setSiteLang(cookies.load('site-lang'))
      }, []);

    return(
        <div className="form-content">
            <div className='button-box-close'>
                <button className='button-close' onClick={()=>{formFunctions.handleModalClose()}}>X</button>
            </div>
            <div className='sign-in-title'>Language</div>
            <FormControl className='input-box' sx={{ fontSize:12 }} size="small">
                <InputLabel id="select-lang">Language</InputLabel>
                <Select
                    labelId="select-lang"
                    id="select-lang"
                    value={siteLang}
                    label="Language"
                    onChange={handleLang}
                >
                    <MenuItem value={'kor'}>한국어</MenuItem>
                    <MenuItem value={'eng'}>English</MenuItem>
                </Select>
            </FormControl>     
        </div>
    )

}

export default FormContent;