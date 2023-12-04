// ======================================================================================== [Import Libaray]
import { useEffect, useState } from 'react';
import cookies from 'react-cookies';
import axios from 'axios';

// ======================================================================================== [Import Material UI Libaray]
import { Button, ButtonGroup , TextField } from '@mui/material';
//icon
import ClearIcon from '@mui/icons-material/Clear';
// ======================================================================================== [Import Component] js
import viewUserLang from './viewUserLang'
import UserCardList from './CardList/UserCardList';
import UserTableList from './TableList/UserTableList';



// ======================================================================================== [Import Component] CSS

function ViewUser (props) {
    const { approvalStatus, handlePageTitle, handleSystemCode } = props

    const [viewSelect, setViewSelect] = useState(1);

    useEffect(() =>{
        handlePageTitle(viewUserLang.formTitle[cookies.load('site-lang')])
        handleSystemCode('sys1')
    },[])
    return (
        <div>
                <ButtonGroup variant="contained" color='sys1'>
                    <Button onClick={() => setViewSelect(1)}>Card View</Button>
                    <Button onClick={() => setViewSelect(2)}>Table View</Button>
                </ButtonGroup>
                {
                    viewSelect === 1 ? <UserCardList approvalStatus = { approvalStatus } handlePageTitle = { handlePageTitle } handleSystemCode = { handleSystemCode }/> : <div/>
                }
                {
                    viewSelect === 2 ? <UserTableList approvalStatus = { approvalStatus }/> : <div/>
                }
        </div>
    )
}

export default ViewUser;