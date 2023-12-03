// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import cookies from 'react-cookies'
import * as yup from 'yup';
import axios from 'axios';

// ======================================================================================== [Import Material UI Libaray]
import { Button, Modal, Paper, InputLabel, MenuItem, Select, IconButton, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//icon
import PeopleIcon from '@mui/icons-material/People';
import ClearIcon from '@mui/icons-material/Clear';
// ======================================================================================== [Import Component] js
// Table
import TableType1 from '../../../../../System/Components/TableType1/TableType1' // System Component
import columnDef from './columnDef' // this form's columnDef
import userCardListLang from '../CardList/userCardListLang'

// ======================================================================================== [Import Component] CSS

function UserTableList (props) {

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
        submitButton : {
            width:534,
        }
    }

    const [tableSelected,setTableSelected] = useState([]);
    const [listData, setListData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchWord,setSearchWord] = useState('');
    const handleWordChange = function(value) { 
        setSearchWord(value)
        setFilteredData(listData.filter(student =>
            Object.keys(student).some(key => {
                if (typeof student[key] === 'object' && Array.isArray(student[key])) {
                    return student[key].some(innerObj =>
                        Object.values(innerObj).some(innerVal =>
                            String(innerVal).includes(value)
                        )
                    );
                } else {
                    return String(student[key]).includes(value);
                }
            })
        ));
    }

    const getUserList = async function () {
        let approval_status = ''
        if (Array.isArray(props.approvalStatus)) {
            approval_status = props.approvalStatus
        } else {
            approval_status = `${props.approvalStatus}`
        }
        
        let rs =  await axios({
            method : 'get',
            url : '/getuserlist',
            params : {
                approval_status : approval_status,
            },
            headers : {
              'Content-Type':'application/json'
            }
        })
        .then(( res ) => {
            return res.data;
        })
        .catch( (error) => {
            return error.response;
        })
        setListData(rs)
        setFilteredData(rs)
    }

    useEffect(() =>{
        getUserList()
    },[])

    return (
        <div>
            <TextField
            sx= {{ width : '600px' }}
            color = 'sys1'
            variant="outlined"
            id="search_field"
            name="search_field"
            label={ userCardListLang.carListNavigator.inputField.search_field.placeholder[cookies.load('site-lang')] }
            value={searchWord}
            onChange={(e) => handleWordChange(e.target.value)}
            size='small'
            margin="dense"
            fullWidth
            InputProps={{
                endAdornment:(
                    <IconButton size='small' onClick={()=>{handleWordChange('')}}>
                        <ClearIcon size='small'/>
                    </IconButton>
                ),
                style: style.inputTexstField // font size of input text
            }}
            InputLabelProps={{style: style.inputTexstField}} // font size of input label
            />
            <TableType1
            tableData = { filteredData }
            columnsDef = { columnDef }
            divStyle={{ marginLeft : '5px', marginTop : '10px', divMaxWidth : '100vw', divMaxHeight : '100vh', overflow : 'auto'}}
            tableStyle = {{ }}
            headerStyle = {{ fontSize : '12px' }}
            rowStyle = {{ fontSize : '12px' }} // 일괄 모든 row에 스타일 적용, columnDef의 cell 렌더가 우선순위가 높음
            footerOn = { false }
            setTableSelected = { setTableSelected }
            />
        </div>
    )
}

export default UserTableList;


