// ======================================================================================== [Import Libaray]
import { useState } from 'react';
import cookies from 'react-cookies'


// ======================================================================================== [Import Material UI Libaray]
import { IconButton, Paper, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ClearIcon from '@mui/icons-material/Clear';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


// ======================================================================================== [Import Component] js
import piiRecorderLang from './piiRecorderLang'

// ======================================================================================== [Import Component] CSS

function PiiRecorder (props){
    const { formikProps } = props

    const style = {
        subtitle:{
            box : {
                display:'flex', flexDirection:'row', alignItems:'center', fontSize:'medium'
            },
            text : {
                marginTop:'4px', marginLeft:'2px'
            }
        },
        paper : {
            width:500,
            p: 2,
            mb:2
        },
        inputTexstField : {
            fontSize: 14,
            paddingRight:0
        },
        arrItem : {
            oneItem : {
                padding:'10px',
                marginTop:'5px',
                marginBottom:'5px',
                borderRadius:'5px',
                boxSizing:'border-box',
                display:'flex',
                flexDirection:'row',
                border:'#D3D3D3 solid 1px'
            },
            delItem : {
                height: 'auto',
                paddingLeft:'10px',
                boxSizing:'border-box'
            },
            itemInfo : {
                flexGrow : 1,
                display : 'flex',
                flexDirection : 'column',
            },
            subInfo : {
                marginTop : '7px',
                display : 'flex',
                flexDirection : 'row'
            }

        },
    }

    const [userPwAsterisk,setUserPwAsterisk] = useState("password");
    const toggleserPwAsterisk = () => {
        if ( userPwAsterisk === "password" ) {
            setUserPwAsterisk( "text" )
        } else {
            setUserPwAsterisk( "password" )
        }
    }

    const [userPwConfirmAsterisk,setUserPwConfirmAsterisk] = useState("password");
    const toggleserPwConfirmAsterisk = () => {
        if ( userPwConfirmAsterisk === "password" ) {
            setUserPwConfirmAsterisk( "text" )
        } else {
            setUserPwConfirmAsterisk( "password" )
        }
    }

    return (
        <Paper id='ppiPaper' sx={style.paper} elevation={3}>
            <div style={style.subtitle.box}>
                <FingerprintIcon color='sys1'/>
                <div style={style.subtitle.text}>{"Personal Identifiable Information (PII)"}</div>
            </div>
            <TextField
            required
            disabled = {!(props.preparedType == "NEW")}
            variant="outlined"
            id="user_account"
            name="user_account"
            label={piiRecorderLang.ppiPaper.inputField.user_account.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.user_account}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.user_account ? formikProps.errors.user_account : ""}
            error={formikProps.touched.user_account && Boolean(formikProps.errors.user_account)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{formikProps.setFieldValue('user_account','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <TextField
            required
            variant="outlined"
            id="user_pw"
            name="user_pw"
            type={userPwAsterisk}
            label={piiRecorderLang.ppiPaper.inputField.user_pw.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.user_pw}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.user_pw ? formikProps.errors.user_pw : ""}
            error={formikProps.touched.user_pw && Boolean(formikProps.errors.user_pw)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <div style ={{display : 'flex', flexDirection : 'row'}}>
                        <IconButton size='small' edge="end" onClick={()=>{formikProps.setFieldValue('user_pw','')}}>
                            <ClearIcon size='small'/>
                        </IconButton>
                        <IconButton size='small' onClick={()=>{toggleserPwAsterisk()}}>
                            {
                                userPwAsterisk === "password" ? <VisibilityIcon size='small'/> : <VisibilityOffIcon size='small'/>
                            }
                        </IconButton>
                    </div>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <TextField
            required
            variant="outlined"
            id="user_pw_confirm"
            name="user_pw_confirm"
            type={userPwConfirmAsterisk}
            label={piiRecorderLang.ppiPaper.inputField.user_pw_confirm.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.user_pw_confirm}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.user_pw_confirm ? formikProps.errors.user_pw_confirm : ""}
            error={formikProps.touched.user_pw_confirm && Boolean(formikProps.errors.user_pw_confirm)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <div style ={{display : 'flex', flexDirection : 'row'}}>
                        <IconButton size='small' edge="end" onClick={()=>{formikProps.setFieldValue('user_pw_confirm','')}}>
                            <ClearIcon size='small'/>
                        </IconButton>
                        <IconButton size='small' onClick={()=>{toggleserPwConfirmAsterisk()}}>
                            {
                                userPwConfirmAsterisk === "password" ? <VisibilityIcon size='small'/> : <VisibilityOffIcon size='small'/>
                            }
                        </IconButton>
                    </div>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <TextField
            required
            variant="outlined"
            id="user_name"
            name="user_name"
            label={piiRecorderLang.ppiPaper.inputField.user_name.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.user_name}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.user_name ? formikProps.errors.user_name : ""}
            error={formikProps.touched.user_name && Boolean(formikProps.errors.user_name)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{formikProps.setFieldValue('user_name','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <TextField
            variant="outlined"
            id="user_nickname"
            name="user_nickname"
            label={piiRecorderLang.ppiPaper.inputField.user_nickname.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.user_nickname}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.user_nickname ? formikProps.errors.user_nickname : ""}
            error={formikProps.touched.user_nickname && Boolean(formikProps.errors.user_nickname)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{formikProps.setFieldValue('user_nickname','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <div style={{marginTop:'5px'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    id="user_birthday"
                    name="user_birthday"
                    slotProps={{ textField: { size: 'small', fullWidth: true, style: style.inputTexstField }}}
                    label={<Typography sx={{fontSize:14}}>{piiRecorderLang.ppiPaper.inputField.user_birthday.placeholder[cookies.load('site-lang')]}</Typography>}
                    format="YYYY-MM-DD"
                    mask={"____-__-__"}
                    value={formikProps.values.user_birthday}
                    onChange={(newValue) => formikProps.setFieldValue('user_birthday',newValue)}
                    renderInput={(params) => <TextField {...params}
                    color='sys1'/>}
                    />
                </LocalizationProvider>
            </div>
            <FormControl style={{ border:'#D3D3D3 solid 1px', borderRadius:'5px', marginTop:'5px', marginBottom:'2px', paddingLeft:'10px', width:'100%', boxSizing:'border-box', display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <FormLabel
                id="user_gender"
                sx={{mr:1}}
                >
                    {<Typography sx={{fontSize:14}}>{piiRecorderLang.ppiPaper.inputField.user_gender.placeholder[cookies.load('site-lang')]}</Typography>}
                </FormLabel>
                <RadioGroup
                row
                name="user_gender"
                value={formikProps.values.user_gender}
                onChange={formikProps.handleChange}
                >
                    <FormControlLabel
                    value="MALE"
                    control={<Radio />}
                    label={<Typography sx={{fontSize:14}}>Male</Typography>}
                    />
                    <FormControlLabel
                    value="FEMALE"
                    control={<Radio />}
                    label={<Typography sx={{fontSize:14}}>Female</Typography>}
                    />     
                </RadioGroup>
            </FormControl>
            <TextField
            multiline
            maxRows={4}
            variant="outlined"
            id="revision_history"
            name="revision_history"
            label={piiRecorderLang.ppiPaper.inputField.revision_history.placeholder[cookies.load('site-lang')]}
            value={formikProps.values.revision_history}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            helperText={formikProps.touched.revision_history ? formikProps.errors.revision_history : ""}
            error={formikProps.touched.revision_history && Boolean(formikProps.errors.revision_history)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{formikProps.setFieldValue('revision_history','')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
        </Paper>
    )

}

export default PiiRecorder;