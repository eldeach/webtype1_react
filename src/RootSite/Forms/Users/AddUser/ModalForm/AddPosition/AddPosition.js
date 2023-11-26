// ======================================================================================== [Import Libaray]
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';

// ======================================================================================== [Import Material UI Libaray]
import { Button, IconButton, Typography, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import WorkIcon from '@mui/icons-material/Work';

// ======================================================================================== [Import Component] js
import addPositionLang from './addPositionLang.js'


// ======================================================================================== [Import Component] CSS


function AddPosition(props){

    const style = {
        subtitle:{
            box : {
                display:'flex', flexDirection:'row', alignItems:'center', fontSize:'medium'
            },
            text : {
                marginTop:'4px', marginLeft:'2px'
            }
        },
        inputTexstField : {
            fontSize: 14,
            paddingRight:0
        }
    }

    const yupSchema = yup.object().shape({

        job_position: yup.string()
        .required(addPositionLang.inputField.job_position.valMsg.required[cookies.load('site-lang')]), // 필수 입력 필드
      });

    const initialValues = {
        job_position: '',
        job_team: '',
        job_company: ''
    }

    return(
        <Formik
        validationSchema={yupSchema}
        initialValues={initialValues}
        onSubmit={(values)=>{
            props.addElement (values)
        }}
        >
            {formikProps => (
                <form
                noValidate
                style={{width: '400px', display:'flex', flexDirection:'column', alignItems:'center'}}
                id = "addPosition"
                autoComplete='off'
                onSubmit={formikProps.handleSubmit}
                >
                    <div style={style.subtitle.box}>
                        <WorkIcon color='rootsite'/>
                        <div style={style.subtitle.text}>Add Position Information</div>
                    </div>
                    <TextField
                    required
                    variant="outlined"
                    id="job_position"
                    name="job_position"
                    label={addPositionLang.inputField.job_position.placeholder[cookies.load('site-lang')]}
                    value={formikProps.values.job_position}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    helperText={formikProps.touched.job_position ? formikProps.errors.job_position : ""}
                    error={formikProps.touched.job_position && Boolean(formikProps.errors.job_position)}
                    size='small'
                    margin="dense"
                    fullWidth
                    InputProps={{
                        endAdornment:(
                            <IconButton size='small' onClick={()=>{formikProps.setFieldValue('job_position','')}}>
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
                    id="job_team"
                    name="job_team"
                    label={addPositionLang.inputField.job_team.placeholder[cookies.load('site-lang')]}
                    value={formikProps.values.job_team}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    helperText={formikProps.touched.job_team ? formikProps.errors.job_team : ""}
                    error={formikProps.touched.job_team && Boolean(formikProps.errors.job_team)}
                    size='small'
                    margin="dense"
                    fullWidth
                    InputProps={{
                        endAdornment:(
                            <IconButton size='small' onClick={()=>{formikProps.setFieldValue('job_team','')}}>
                                <ClearIcon size='small'/>
                            </IconButton>
                        ),
                        style: style.inputTexstField // font size of input text
                    }}
                    InputLabelProps={{style: style.inputTexstField}} // font size of input label
                    />
                    <TextField
                    variant="outlined"
                    id="job_company"
                    name="job_company"
                    label={addPositionLang.inputField.job_company.placeholder[cookies.load('site-lang')]}
                    value={formikProps.values.job_company}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    helperText={formikProps.touched.job_company ? formikProps.errors.job_company : ""}
                    error={formikProps.touched.job_company && Boolean(formikProps.errors.job_company)}
                    size='small'
                    margin="dense"
                    fullWidth
                    InputProps={{
                        endAdornment:(
                            <IconButton size='small' onClick={()=>{formikProps.setFieldValue('job_company','')}}>
                                <ClearIcon size='small'/>
                            </IconButton>
                        ),
                        style: style.inputTexstField // font size of input text
                    }}
                    InputLabelProps={{style: style.inputTexstField}} // font size of input label
                    />
                    <Button sx={{mt:1}} fullWidth variant="contained" color = "rootsite" size="small" type="submit" form="addPosition">ADD</Button>
                </form>
            )}
        </Formik>
    )

}

export default AddPosition;