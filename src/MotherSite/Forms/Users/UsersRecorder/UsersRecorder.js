// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';

import axios from 'axios';

import moment from 'moment';
import 'moment/locale/ko';	//대한민국

// ======================================================================================== [Import Material UI Libaray]
import { Button, Chip, IconButton, Paper, TextField, Typography } from '@mui/material';
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
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GppGoodIcon from '@mui/icons-material/GppGood';
// ======================================================================================== [Import Component] js
import addUserLang from './addUserLang'
// Popup Form

// objArrHandler



// ======================================================================================== [Import Component] CSS

function UsersRecorder (props) {
    return (
        <Formik
        validationSchema={yupSchema}
        initialValues={props.initialValues}
        onSubmit={async (values, actions)=>{
            await onSubmitFunc(values, actions)
        }}
        >
            { formikProps => (
                <form
                noValidate
                style={{width:'100%', hegith:'100%', display:'flex', flexDirection:'row'}}
                id = "user"
                autoComplete='off'
                onSubmit={formikProps.handleSubmit}
                >

                </form>
            )}
        </Formik>
    )
}

export default UsersRecorder;