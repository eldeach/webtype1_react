// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import cookies from 'react-cookies'
import axios from 'axios';

// ======================================================================================== [Import Material UI Libaray]
import { IconButton, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
// ======================================================================================== [Import Component] js
import myReviewLang from '../../../myReviewLang'
// Table
import TableType1 from '../../../../../../System/TableObj/TableType1/Template/TableType1'
import columnDef from '../columnDef' // this form's columnDef

// ======================================================================================== [Import Component] CSS

function AppTbl () {

    const style = {
        inputTexstField : {
            fontSize: 14,
            paddingRight:0
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

    const getMyReviewList = async () => {     
        let rs =  await axios({
            method : 'get',
            url : '/getmyreviewlist',
            params : {
                sys_code : 'sys1',
                approval_type : 'APPROVAL',
            },
            headers : {
              'Content-Type':'application/json'
            }
        })
        .then(( res ) => {
            console.log(res.data)
            return res.data;
        })
        .catch(( error ) => {
            console.log(error)
            return error.response;
        })
        setListData(rs)
        setFilteredData(rs)   
    }
    useEffect(() => {
        getMyReviewList()
    },[])

    return (
        <div>
            <div style = {{ width: '100wv', display : 'flex', flexDirection : 'row', justifyContent : 'center' }}>
                <TextField
                sx= {{ width : '600px' }}
                color = 'sys1'
                variant="outlined"
                id="search_field"
                name="search_field"
                label={ myReviewLang.myReview.carListNavigator.inputField.search_field.placeholder[cookies.load('site-lang')] }
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
            </div>
            <div style = {{ width: '100wv', display : 'flex', flexDirection : 'colum', justifyContent : 'center' }}>
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
        </div>
    )
}

export default AppTbl;