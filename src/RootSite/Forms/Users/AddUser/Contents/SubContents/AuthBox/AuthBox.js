// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useEffect, useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]  
import { Autocomplete, Button, IconButton, Paper, TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import KeyIcon from '@mui/icons-material/Key';

// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../Configure/Language/langCodeBook';
import SubTitle from '../../../../../GlobalComponent/SubTitle'


// ======================================================================================== [Import Component] CSS
import './AuthBox.css'

function AuthBox(props){
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;
    const [permissions, setPermissions] = useState([]);
    const [permissionList,setPermissionList] = useState([]);

    const getPermissionList = [
        {permissionGroup:'root', permissionCode:'root1',permissionTtile:{kor:'샘플1', eng:'sample1'}, permissionDescription:{kor:'샘플1', eng:'sample1'}},
        {permissionGroup:'root', permissionCode:'root2',permissionTtile:{kor:'샘플2', eng:'sample2'}, permissionDescription:{kor:'샘플2', eng:'sample2'}},
        {permissionGroup:'subSite', permissionCode:'subSite1',permissionTtile:{kor:'서브권한샘플1', eng:'subsample1'}, permissionDescription:{kor:'서브권한샘플1', eng:'subsample1'}},
        {permissionGroup:'subSite', permissionCode:'subSite2',permissionTtile:{kor:'서브권한샘플2', eng:'subsample2'}, permissionDescription:{kor:'서브권한샘플2', eng:'subsample2'}}
    ]

    const handlePermissions = (arr) => {setPermissions(arr)}

    useEffect(()=>{
        setPermissionList([...getPermissionList])

    },[permissions])


    return(
        <Paper sx={paperStyle} elevation={3}>
            <SubTitle icon={<KeyIcon color='rootsite'/>} text={"User Permissions"}></SubTitle>
            {
                permissionList.map((permission, index)=>(
                    <div className='contact-field-box' key={index}>
                        <input type="checkbox" id="scales" name="scales"></input>
                        <label for="scales">
                            <div>{permission.permissionCode}</div>
                            <div>{permission.permissionTtile[cookies.load('site-lang')]}</div>
                            <div>{permission.permissionDescription[cookies.load('site-lang')]}</div>
                        </label>
                    </div>
                ))
            }
        </Paper>
    )

}

export default AuthBox;