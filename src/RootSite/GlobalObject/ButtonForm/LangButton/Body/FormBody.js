// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//icon
import InfoIcon from '@mui/icons-material/Info';

// ======================================================================================== [Import Component] js
import langButtonLang from '../langButtonLang'

// ======================================================================================== [Import Component] CSS
import './FormBody.css'


function FormBody(props){

    let [siteLang,setSiteLang] = useState('');
    const handleLang = (event) => {
        setSiteLang(event.target.value)
        cookies.save('site-lang',event.target.value,{path :'/'});
    }

    useEffect(() => {
        setSiteLang(cookies.load('site-lang'))
      }, []);

    return(
        <div className="langbutton-formbody">
            <div className='langbutton-formbody-icon-box'>
                <InfoIcon color = 'info' fontSize="medium"/>
            </div>
            <div className='langbutton-formbody-description-box'>
                <p>{langButtonLang.text.p1[cookies.load('site-lang')]}</p>
                <p>{langButtonLang.text.p2[cookies.load('site-lang')]}</p>
            </div>
            <FormControl sx={{ fontSize:12, width:"100%" }} size="small">
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

export default FormBody;