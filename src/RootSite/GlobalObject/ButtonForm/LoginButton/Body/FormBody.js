// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Button, TextField } from '@mui/material';

// ======================================================================================== [Import Component] js
//config
import loginButtonLang from '../loginButtonLang';

// ======================================================================================== [Import Component] CSS
import './FormBody.css'

function FormBody(props){

    const textFieldStyle={
        fontSize: 14
    }


    return(
        <div className="form-content-1">
            <div className='input-box'>
                <TextField
                required
                variant="outlined"
                id="user_account"
                name="user_account"
                label={loginButtonLang.input.user_account.placeholder[cookies.load('site-lang')]}
                value={props.formikObj.values.user_account}
                onChange={props.formikObj.handleChange}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.user_account ? props.formikObj.errors.user_account : ""}
                error={props.formikObj.touched.user_account && Boolean(props.formikObj.errors.user_account)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
                <TextField
                required
                variant="outlined"
                id="user_pw"
                name="user_pw"
                label={loginButtonLang.input.user_pw.placeholder[cookies.load('site-lang')]}
                type="password"
                value={props.formikObj.values.user_pw}
                onChange={props.formikObj.handleChange}
                onBlur={props.formikObj.handleBlur}
                helperText={props.formikObj.touched.user_pw ? props.formikObj.errors.user_pw : ""}
                error={props.formikObj.touched.user_pw && Boolean(props.formikObj.errors.user_pw)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form="UserLogin">{loginButtonLang.button.signIn[cookies.load('site-lang')]}</Button>
            </div>             
        </div>
    )

}

export default FormBody;