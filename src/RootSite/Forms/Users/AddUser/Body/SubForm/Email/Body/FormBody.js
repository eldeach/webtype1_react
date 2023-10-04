// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Button, IconButton, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//icon
import ClearIcon from '@mui/icons-material/Clear';

// ======================================================================================== [Import Component] js
//config
import emailLang from '../emailLang';

// ======================================================================================== [Import Component] CSS
import './FormBody.css'

const paperStyle = {
    width:500,
    p: 2,
    mb:2
};

const textFieldStyle={
    fontSize: 14,
    paddingRight:0
}

function FormBody(props){

    return(
        <div className="one-email-popup">
            <div className='one-email-item-fields'>
                <TextField
                required
                variant="outlined"
                id="email_address"
                name="email_address"
                label={emailLang.input.email_address.placeholder[cookies.load('site-lang')]}
                value={props.formikObj.values.email_address}
                onChange={props.formikObj.handleChange}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.email_address ? props.formikObj.errors.email_address : ""}
                error={props.formikObj.touched.email_address && Boolean(props.formikObj.errors.email_address)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{props.formikObj.setFieldValue('email_address','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <div className='one-email-option-box'>
                    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                        <FormLabel id="email_usage" sx={{mr:1}}>{emailLang.input.email_usage.placeholder[cookies.load('site-lang')]}</FormLabel>
                            <RadioGroup
                            row
                            defaultValue={props.initialValues.email_usage}
                            name="email_usage"
                            value={props.formikObj.values.emailUsage}
                            onChange={props.formikObj.handleChange}
                            >
                                <FormControlLabel value="personal" control={<Radio />} label={emailLang.input.email_usage.optionLabel.personal[cookies.load('site-lang')]} />
                                <FormControlLabel value="work" control={<Radio />} label={emailLang.input.email_usage.optionLabel.work[cookies.load('site-lang')]}/>
                                <FormControlLabel value="other" control={<Radio />} label={emailLang.input.email_usage.optionLabel.other[cookies.load('site-lang')]}/>
                            </RadioGroup>
                    </FormControl>
                </div>
                <TextField
                variant="outlined"
                id="email_affiliation"
                name="email_affiliation"
                label={emailLang.input.email_affiliation.placeholder[cookies.load('site-lang')]}
                type="text"
                value={props.formikObj.values.email_affiliation}
                onChange={props.formikObj.handleChange}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.email_affiliation ? props.formikObj.errors.email_affiliation : ""}
                error={props.formikObj.touched.email_affiliation && Boolean(props.formikObj.errors.email_affiliation)}
                size='small'
                margin="dense"
                fullWidth
                InputProps={{
                    endAdornment:(
                    <IconButton size='small' onClick={()=>{props.formikObj.setFieldValue('email_affiliation','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                    ),
                    style: textFieldStyle // font size of input text
                }}
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='email-add-button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form={props.formId}>{emailLang.button.subForm.signIn[cookies.load('site-lang')]}</Button>       
            </div>
        </div>
    )
}

export default FormBody;