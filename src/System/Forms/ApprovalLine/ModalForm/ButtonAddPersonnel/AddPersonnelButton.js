// ======================================================================================== [Import Libaray]
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';

// ======================================================================================== [Import Material UI Libaray]
import { Button, Modal, Paper, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';

// ======================================================================================== [Import Component] js
import addPersonnelButtonLang from './addPersonnelButtonLang'
import columnDef from './columnDef'
import TableType1 from '../../../../Components/TableType1/TableType1'
import axios from 'axios';

// ======================================================================================== [Import Component] CSS


function AddPersonnelButton (props){
    
    const style = {
        pageTitle : {
            box : {
                display:'flex', flexDirection:'column', alignItems:'center', fontSize:'medium'
            },
            text : {
                fontSize : '20px', marginTop:'4px', marginLeft:'2px'
            }
        },
        descriptionBox : {
            marginTop:'20px',
            marginBottom : '46px',
            boxSizing : 'border-box',
            fontSzie : 'small',
            color : 'orange',
            whiteSpace : 'pre-wrap',
            worWrap : 'break-word',
            textAlign : 'center',
            flexGrow : 1
        },
        description : {
            marginTop : '0px',
            marginBottom : '6px',
        },
        popupPaper : {
            width : 650,
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
        approvalStepBox : {
            display:'flex', 
        }
    }

    const yupSchema = yup.object().shape({

      });

    const initialValues = {
        approval_type : 'APPROVAL'
    }

    const [popup,setPopup] = useState(0);
    const handleModalClose = () => setPopup(0);

    const [tableData,setTableData] = useState([])
    const getApprovaluserlist = async function () {
        let rs = await axios.get('/approvaluserlist')
        .then((res) => {
            return res.data
        })
        setTableData(rs)
        console.log(rs)
        console.log(rs[0])
    }

    const [tableSelected,setTableSelected] = useState([]);
    const handlePullOutSelected = function (newArr) {
        setTableSelected(newArr)
    }

    useEffect(() => {
        getApprovaluserlist()

    }, []);

    return (
        <Formik
        validationSchema={yupSchema}
        initialValues={initialValues}
        onSubmit={(values, actions)=>{
            console.log(tableSelected)
        }}
        >
            { formikProps => (
                <div>
                    <Button fullWidth variant="outlined" color = 'sys1' size="small" sx={{ mt : 1 }} onClick={()=>setPopup(1)}>ADD</Button>
                    <Modal open={( popup === 1 )} onClose={ handleModalClose }>
                                        <form
                            noValidate
                            id = "addpersonnel"
                            autoComplete='off'
                            onSubmit={formikProps.handleSubmit}
                            >
                        <Paper id='langPaper' sx={ style.popupPaper } elevation={3}>
                            <div className = "popup-close-button-box"><button className='popup-close-button' onClick={handleModalClose}>X</button></div>
                            <div style={ style.pageTitle.box }>
                                <PeopleIcon color='sys1' sx = {{ fontSize : 'xx-large' }}/>
                                <div style={style.pageTitle.text}>{addPersonnelButtonLang.pageTitle[cookies.load('site-lang')]}</div>
                            </div>
                            <FormControl style={{ border:'#D3D3D3 solid 1px', borderRadius:'5px', marginLeft : '5px', marginRight : '5px', marginTop:'5px', marginBottom:'2px', paddingLeft:'10px', width:'100%', boxSizing:'border-box', display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                                <FormLabel
                                id="approval_type"
                                sx={{ mr:1 }}
                                >
                                    {<Typography sx={{fontSize:14, width : '35px'}}>Type</Typography>}
                                </FormLabel>
                                <RadioGroup
                                row
                                name="approval_type"
                                value={ formikProps.values.approval_type }
                                onChange={ formikProps.handleChange }
                                sx={{ width : '580px', justifyContent:'center' }}
                                >
                                    <FormControlLabel
                                    value="APPROVAL"
                                    control={<Radio />}
                                    label={<Typography sx={{fontSize:14}}>Approval</Typography>}
                                    />
                                    <FormControlLabel
                                    value="AGREEMENT"
                                    control={<Radio />}
                                    label={<Typography sx={{fontSize:14}}>Agreement</Typography>}
                                    />
                                    <FormControlLabel
                                    value="RECIEVE"
                                    control={<Radio />}
                                    label={<Typography sx={{fontSize:14}}>Recieve</Typography>}
                                    />     
                                    <FormControlLabel
                                    value="FINALAPPROVAL"
                                    control={<Radio />}
                                    label={<Typography sx={{fontSize:14}}>Final Approval</Typography>}
                                    />  
                                </RadioGroup>
                            </FormControl>
                            <TableType1
                            tableData = { tableData }
                            tableColumnsDef = { columnDef }
                            divStyle={{ marginLeft : '5px', marginTop : '10px', divMaxWidth : '600px', divMaxHeight : '600px', overflow : 'auto'}}
                            tableStyle = {{ }}
                            headerStyle = {{ fontSize : '12px' }}
                            rowStyle = {{ fontSize : '12px' }} // 일괄 모든 row에 스타일 적용, columnDef의 cell 렌더가 우선순위가 높음
                            footerOn = { false }
                            handlePullOutSelected = { handlePullOutSelected }
                            />
                            <div style ={ style.approvalStepBox }>
                            {
                                (props.inheritedArr.length === 0) ? <Button variant="outlined" color = 'sys1' size="small" sx = {{ m : 0.5 }} form='addpersonnel' type='submit'>{ "Final Approval Step" }</Button>

                                : (
                                    props.inheritedArr.map( (oneElement, elementIndex) => (
                                        <Button variant="outlined" color = 'sys1' size="small" sx = {{ m : 0.5 }} form='addpersonnel' type='submit'> {
                                            elementIndex === (props.inheritedArr.length - 1) ?
                                            "Final Approval Step" :
                                            "Approval Step ".concat(String(elementIndex+1))
                                        } </Button>
                                    ))
                                )
                            }
                            </div>
                        </Paper>
                        </form>
                    </Modal>
                    </div>
            )}  
        </Formik>
    )
}

export default AddPersonnelButton;