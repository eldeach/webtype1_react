// ======================================================================================== [Import Libaray]
import { useState } from 'react';
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';

// ======================================================================================== [Import Material UI Libaray]
import { Button, Chip, IconButton, Modal, Paper, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// ======================================================================================== [Import Component] js
import addUserLang from './addUserLang'
import onSubmitFunc from './Functions/onSubmitFunc';
// Popup Form
import AddEmail from './ModalForm/AddEmail/AddEmail';
import AddPhone from './ModalForm/AddPhone/AddPhone';

// ======================================================================================== [Import Component] CSS


function AddUser(){

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
        popupPaper : {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            p: 2,
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

        }
    }

    const yupSchema = yup.object().shape({
        user_account: yup.string()
        .required(addUserLang.ppiPaper.inputField.user_account.valMsg.required[cookies.load('site-lang')]),
      
        user_pw: yup.string()
        .required(addUserLang.ppiPaper.inputField.user_pw.valMsg.required[cookies.load('site-lang')]),
      
        user_pw_confirm: yup.string()
        .oneOf([yup.ref('user_pw'), null], addUserLang.ppiPaper.inputField.user_pw_confirm.valMsg.match[cookies.load('site-lang')])
        .required(addUserLang.ppiPaper.inputField.user_pw_confirm.valMsg.required[cookies.load('site-lang')]),
    });

    const initialValues = {
        user_account: '',
        user_pw:'',
        user_pw_confirm:'',
        user_name:'',
        user_nickname:'',
        user_birthday:null,
        user_gender:'male',
        user_email:[],
        user_phone:[],
        user_position:[],
    }

    const [popup,setPopup] = useState(0);
    const handleModalClose = () => setPopup(0);

    const arrAddElement = function (arr, newElement) {
        let duplication = 0
        let tempArr = [...arr];
        tempArr.map((oneItem, index)=>{
            if(oneItem[Object.keys(oneItem)[0]] == newElement[Object.keys(newElement)[0]]){
                duplication += 1;
            }
        })
        if (duplication === 0){
            tempArr.push(newElement);
            return tempArr;
        }
        else {
            return 'err'
        }
        
    };

    const arrDelElement = function (arr, index) {
        let tempArr = [...arr];
        tempArr.splice(index, 1);
        return tempArr;
    };


    return(
        <Formik
        validationSchema={yupSchema}
        initialValues={initialValues}
        >
            {formikProps => (
                <form
                noValidate
                style={{width:'100%', hegith:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}
                id = "AddUser"
                autoComplete='off'
                onSubmit={formikProps.handleSubmit}
                >
                    <Paper id='ppiPaper' sx={style.paper} elevation={3}>
                        <div style={style.subtitle.box}>
                            <FingerprintIcon color='rootsite'/>
                            <div style={style.subtitle.text}>{"Personal Identifiable Information (PII)"}</div>
                        </div>
                        <TextField
                        required
                        variant="outlined"
                        id="user_account"
                        name="user_account"
                        label={addUserLang.ppiPaper.inputField.user_account.placeholder[cookies.load('site-lang')]}
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
                        type="password"
                        label={addUserLang.ppiPaper.inputField.user_pw.placeholder[cookies.load('site-lang')]}
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
                                <IconButton size='small' onClick={()=>{formikProps.setFieldValue('user_pw','')}}>
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
                        id="user_pw_confirm"
                        name="user_pw_confirm"
                        type="password"
                        label={addUserLang.ppiPaper.inputField.user_pw_confirm.placeholder[cookies.load('site-lang')]}
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
                                <IconButton size='small' onClick={()=>{formikProps.setFieldValue('user_pw_confirm','')}}>
                                    <ClearIcon size='small'/>
                                </IconButton>
                            ),
                            style: style.inputTexstField // font size of input text
                        }}
                        InputLabelProps={{style: style.inputTexstField}} // font size of input label
                        />
                        <TextField
                        variant="outlined"
                        id="user_name"
                        name="user_name"
                        label={addUserLang.ppiPaper.inputField.user_name.placeholder[cookies.load('site-lang')]}
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
                        label={addUserLang.ppiPaper.inputField.user_nickname.placeholder[cookies.load('site-lang')]}
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
                                label={<Typography sx={{fontSize:14}}>{addUserLang.ppiPaper.inputField.user_birthday.placeholder[cookies.load('site-lang')]}</Typography>}
                                format="YYYY-MM-DD"
                                mask={"____-__-__"}
                                value={formikProps.values.user_birthday}
                                onChange={(newValue) => formikProps.setFieldValue('user_birthday',newValue)}
                                renderInput={(params) => <TextField {...params}
                                color="rootsite"/>}
                                />
                            </LocalizationProvider>
                        </div>
                        <FormControl style={{ border:'#D3D3D3 solid 1px', borderRadius:'5px', marginTop:'5px', marginBottom:'2px', paddingLeft:'10px', width:'100%', boxSizing:'border-box', display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                            <FormLabel
                            id="user_gender"
                            sx={{mr:1}}
                            >
                                {<Typography sx={{fontSize:14}}>{addUserLang.ppiPaper.inputField.user_gender.placeholder[cookies.load('site-lang')]}</Typography>}
                            </FormLabel>
                            <RadioGroup
                            row
                            name="user_gender"
                            value={formikProps.values.user_gender}
                            onChange={formikProps.handleChange}
                            >
                                <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label={<Typography sx={{fontSize:14}}>Male</Typography>}
                                />
                                <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label={<Typography sx={{fontSize:14}}>Female</Typography>}
                                />     
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper id='emailPaper' sx={style.paper} elevation={3}>
                        <div style={style.subtitle.box}>
                            <EmailIcon color='rootsite'/>
                            <div style={style.subtitle.text}>E-Mail</div>
                        </div>
                        { // 현재 이메일 배열 객체 정보 출력 iterator
                            formikProps.values.user_email.map((oneItem, index)=>(
                            <div style={style.arrItem.oneItem}>
                                    <div style={style.arrItem.itemInfo}>
                                        <Chip size="small" icon={<MailOutlineIcon size="small"/>} color="rootsite" label={oneItem.email_address}/>
                                        <div style={style.arrItem.subInfo}>
                                            <Chip size="small" icon={<CategoryIcon size="small"/>} color="rootsite" variant="outlined" label={oneItem.email_usage}/>
                                            <Chip size="small" sx={{width:'100%',ml:0.8}} icon={<BusinessIcon size="small"/>} color="rootsite" variant="outlined" label={oneItem.email_affiliation}/>
                                        </div>
                                    </div>
                                    <div style={style.arrItem.delItem}>
                                        <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>formikProps.setFieldValue('user_email',arrDelElement(formikProps.values.user_email, index))}><DeleteForeverIcon/></Button>
                                    </div>
                                </div>
                            ))
                        }
                        <Button fullWidth variant="outlined" color = "rootsite" size="small" onClick={()=>setPopup(1)}>ADD</Button>
                        <Modal open={(popup === 1)} onClose={handleModalClose}>
                            <Paper sx={style.popupPaper} elevation={3}>
                            <div className='button-box-close'>
                                <button className='button-close' onClick={handleModalClose}>X</button>
                            </div>
                                <AddEmail
                                addFunction = {function (newElement) {
                                    let addResult = arrAddElement(formikProps.values.user_email, newElement)
                                    if (typeof addResult == 'object'){
                                        formikProps.setFieldValue('user_email', arrAddElement(formikProps.values.user_email, newElement))
                                        return 'done'
                                    }
                                    else {
                                        return 'err'
                                    }
                                }}
                                
                                handleModalClose = {handleModalClose} 
                                />
                            </Paper>
                        </Modal>
                    </Paper>
                    <Paper id='phonePaper' sx={style.paper} elevation={3}>
                        <div style={style.subtitle.box}>
                            <PhoneIcon color='rootsite'/>
                            <div style={style.subtitle.text}>Phone</div>
                        </div>
                        { // 현재 폰 배열 객체 정보 출력 iterator
                            formikProps.values.user_phone.map((oneItem, index)=>(
                            <div style={style.arrItem.oneItem}>
                                    <div style={style.arrItem.itemInfo}>
                                        <Chip size="small" icon={<MailOutlineIcon size="small"/>} color="rootsite" label={oneItem.phone_number}/>
                                        <div style={style.arrItem.subInfo}>
                                            <Chip size="small" icon={<CategoryIcon size="small"/>} color="rootsite" variant="outlined" label={oneItem.phone_usage}/>
                                            <Chip size="small" sx={{width:'100%',ml:0.8}} icon={<BusinessIcon size="small"/>} color="rootsite" variant="outlined" label={oneItem.phone_affiliation}/>
                                        </div>
                                    </div>
                                    <div style={style.arrItem.delItem}>
                                        <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>formikProps.setFieldValue('user_phone',arrDelElement(formikProps.values.user_phone, index))}><DeleteForeverIcon/></Button>
                                    </div>
                                </div>
                            ))
                        }
                        <Button fullWidth variant="outlined" color = "rootsite" size="small" onClick={()=>setPopup(2)}>ADD</Button>
                        <Modal open={(popup === 2)} onClose={handleModalClose}>
                            <Paper sx={style.popupPaper} elevation={3}>
                            <div className='button-box-close'>
                                <button className='button-close' onClick={handleModalClose}>X</button>
                            </div>
                                <AddPhone
                                addFunction = {function (newElement) {
                                    if (typeof addResult == 'object'){
                                        formikProps.setFieldValue('user_phone', arrAddElement(formikProps.values.user_phone, newElement))
                                        return 'done'
                                    }
                                    else {
                                        return 'err'
                                    }
                                }}
                                handleModalClose = {handleModalClose} 
                                />
                            </Paper>
                        </Modal>
                    </Paper>
                </form>
            )}
        </Formik>
    )

}

export default AddUser;