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
import langCodeBook from '../../../../../../GlobalObject/Configure/Language/langCodeBook';
import SubTitleFactory from '../../../../../../GlobalObject/Factory/SubTitleFactory'


// ======================================================================================== [Import Component] CSS
import './PermissionBox.css'

function PermissionBox(props){
    const { formFunctions, formikValues, formikObj, paperStyle, textFieldStyle } = props;
    const [permissions, setPermissions] = useState([]);
    const [permissionList,setPermissionList] = useState([]);
    const [permissionGroup,setPermissionGroup] = useState([]);

    const getPermissionList = [
        {permissionGroup:'root', permissionCode:'root1',permissionTtile:{kor:'샘플1', eng:'sample1'}, permissionDescription:{kor:'샘플1', eng:'sample1'}},
        {permissionGroup:'root', permissionCode:'root2',permissionTtile:{kor:'샘플2', eng:'sample2'}, permissionDescription:{kor:'샘플2', eng:'sample2'}},
        {permissionGroup:'subSite', permissionCode:'subSite1',permissionTtile:{kor:'서브권한샘플1', eng:'subsample1'}, permissionDescription:{kor:'서브권한샘플1', eng:'subsample1'}},
        {permissionGroup:'subSite', permissionCode:'subSite2',permissionTtile:{kor:'서브권한샘플2', eng:'subsample2'}, permissionDescription:{kor:'서브권한샘플2', eng:'subsample2'}}
    ]

    const getPermissionGroup =[
        'root', 'subSite'
    ]

    const handlePermissions = (arr) => {setPermissions(arr)}

    useEffect(()=>{
        setPermissionGroup([...getPermissionGroup])
        setPermissionList([...getPermissionList])
    },[permissions])


    return(
        <Paper sx={paperStyle} elevation={3}>
            <SubTitleFactory icon={<KeyIcon color='rootsite'/>} text={"User Permissions"}></SubTitleFactory>
            {
                permissionList.map((permission, index)=>(
                    <div className='permission-field-box' key={index}>
                        <div className='permission-box-1'>
                            <input type="checkbox" id={`permission-checkbox-${index}`}></input>
                            <label for={`permission-checkbox-${index}`}>
                                Title : {permission.permissionTtile[cookies.load('site-lang')]}
                            </label>
                        </div>

                        <label className='permission-box-2' for={`permission-checkbox-${index}`} >
                            <div>Permission Code : {permission.permissionCode}</div>
                            <div>Description</div>
                            <div>{permission.permissionDescription[cookies.load('site-lang')]}</div>
                        </label>
                    </div>
                ))
            }

        </Paper>
    )

}

export default PermissionBox;