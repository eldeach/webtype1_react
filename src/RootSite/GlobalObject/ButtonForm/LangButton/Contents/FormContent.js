// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//icon
import InfoIcon from '@mui/icons-material/Info';

// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS
import './FormContent.css'


function FormContent(props){

    const { formFunctions, formikValues, formikObj } = props;

    let [siteLang,setSiteLang] = useState('');
    const handleLang = (event) => {
        setSiteLang(event.target.value)
        cookies.save('site-lang',event.target.value,{path :'/'});
    }

    useEffect(() => {
        setSiteLang(cookies.load('site-lang'))
      }, []);

    return(
        <div className="form-content-lang-button">
            <div className='button-box-close'>
                <button className='button-close' onClick={()=>{formFunctions.handleModalClose()}}>X</button>
            </div>
            <div className='lang-title'>Language</div>
            <div className='icon-box'>
                <InfoIcon color = 'info' sx={{fontSize:40}}/>
            </div>
            <div className='description-box'>
                {"*After setting the language, you need to refresh this website for the changes to take effect.\n\n"
                + "*This website logs out the user upon refreshing."}
            </div>
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