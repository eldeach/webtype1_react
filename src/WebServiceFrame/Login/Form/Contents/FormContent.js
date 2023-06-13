
// ======================================================================================== [Import Libaray]
import axios from 'axios';

// ======================================================================================== [Import Libaray] Material UI


// ======================================================================================== [Import Libaray] Material Icon
import CloseIcon from '@mui/icons-material/Close';


// ======================================================================================== [Import Component] CSS
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import './FormContent.css'

function FormContent(props){
    const { formFunctions, formikValues, formikObj } = props;

    const textFieldStyle={
        fontSize: 14
    }


    return(
        <div className="form-content">
            <div className='button-box-close'>
                <button className='button-close' onClick={()=>{formFunctions.modalFunc.handleModalClose()}}>X</button>
            </div>
            <div className='sign-in-title'>Sign in</div>
            <div className='input-box'>
                <TextField
                required
                variant="outlined"
                id="user_account"
                name="user_account"
                label="User Account"
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
                label="Password"
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
                <Button fullWidth variant="contained" size='small' type="submit" form="UserLogin">Sign in</Button>
                <Button fullWidth variant="contained" onClick={async ()=>{
                    let qryBody={required:'aa'}
                    let lastRevNoResult = await axios({
                        method:"get",
                        url:'/auth-check',
                        params:qryBody,
                        headers:{
                            'Content-Type':'application/json'
                        }})
                        .then((res)=>{
                          console.log(res.data)
                        })
                        .catch((err)=>console.log(err))
                }}>authcheck</Button>

                <Button fullWidth variant="contained" onClick={async ()=>{
                    let qryBody={required:'aa'}
                    let lastRevNoResult = await axios({
                        method:"get",
                        url:'/logout',
                        headers:{
                            'Content-Type':'application/json'
                        }})
                        .then((res)=>{
                          console.log(res.data)
                        })
                        .catch((err)=>console.log(err))
                }}>logout</Button>
            </div>             
        </div>
    )

}

export default FormContent;