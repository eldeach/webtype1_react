// ======================================================================================== [Import Libaray] Material UI


// ======================================================================================== [Import Libaray] Material Icon


// ======================================================================================== [Import Component] CSS
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import './FormContent.css'

function FormContent(props){
    const { formFunctions, formikValues, formHandleChange, formHandleBlur, formTouched, formErrers } = props;

    const TextFieldStyle={
        fontSize: 14
    }


    return(
        <div className="form-content">
            <div className='sign-in-title'>Sign in</div>
            <div className='input-box'>
                <TextField
                required
                variant="outlined"
                id="user_account"
                name="user_account"
                label="User Account"
                value={formikValues.user_account}
                onChange={formHandleChange}
                onBlur={formHandleBlur}
                helperText={formTouched.user_account ? formErrers.user_account : ""}
                error={formTouched.user_account && Boolean(formErrers.user_account)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: TextFieldStyle}} // font size of input text
                InputLabelProps={{style: TextFieldStyle}} // font size of input label
                />
                <TextField
                required
                variant="outlined"
                id="user_pw"
                name="user_pw"
                label="Password"
                type="password"
                value={formikValues.user_pw}
                onChange={formHandleChange}
                onBlur={formHandleBlur}
                helperText={formTouched.user_pw ? formErrers.user_pw : ""}
                error={formTouched.user_pw && Boolean(formErrers.user_pw)}
                size='small'
                margin="dense"
                fullWidth
                inputProps={{style: TextFieldStyle}} // font size of input text
                InputLabelProps={{style: TextFieldStyle}} // font size of input label
                />
            </div>
            <div className='button-box'>
                <Button fullWidth variant="contained" size='small' type="submit" form="UserLogin">Sign in</Button>
            </div>             
        </div>
    )

}

export default FormContent;