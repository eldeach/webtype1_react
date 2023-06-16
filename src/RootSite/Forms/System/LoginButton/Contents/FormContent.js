// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  
import { Button, TextField } from '@mui/material';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../Configure/Language/langCodeBook';


// ======================================================================================== [Import Component] CSS
import './FormContent.css'

function FormContent(props){
    const { formFunctions, formikValues, formikObj } = props;

    const textFieldStyle={
        fontSize: 14
    }


    return(
        <div className="form-content">
            <div className='button-box-close'>
                <button className='button-close' onClick={()=>{formFunctions.handleModalClose()}}>X</button>
            </div>
            <div className='sign-in-title'>Sign in</div>
            <div className='input-box'>
                <TextField
                required
                variant="outlined"
                id="user_account"
                name="user_account"
                label={langCodeBook.roosite.form.system.login.input.user_account.placeholder[cookies.load('site-lang')]}
                value={formikValues.user_account}
                onChange={formikObj.formHandleChange}
                onBlur={formikObj.formHandleBlur}
                helperText={formikObj.formTouched.user_account ? formikObj.formErrers.user_account : ""}
                error={formikObj.formTouched.user_account && Boolean(formikObj.formErrers.user_account)}
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
                label={langCodeBook.roosite.form.system.login.input.user_pw.placeholder[cookies.load('site-lang')]}
                type="password"
                value={formikValues.user_pw}
                onChange={formikObj.formHandleChange}
                onBlur={formikObj.formHandleBlur}
                helperText={formikObj.formTouched.user_pw ? formikObj.formErrers.user_pw : ""}
                error={formikObj.formTouched.user_pw && Boolean(formikObj.formErrers.user_pw)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: textFieldStyle}} // font size of input text
                InputLabelProps={{style: textFieldStyle}} // font size of input label
                />
            </div>
            <div className='button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form="UserLogin">{langCodeBook.roosite.form.system.login.button.signIn[cookies.load('site-lang')]}</Button>
            </div>             
        </div>
    )

}

export default FormContent;