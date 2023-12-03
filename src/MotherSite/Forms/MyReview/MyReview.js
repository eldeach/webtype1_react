// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]
import { Button, ButtonGroup } from '@mui/material';

// ======================================================================================== [Import Component] js
import myReviewLang from './myReviewLang'
// Table
import AppTbl from './TableView/AppTbl/AppTbl';
import AgrTbl from './TableView/AgrTbl/AgrTbl';
import ReciTbl from './TableView/ReciTbl/ReciTbl';
import FapTbl from './TableView/FapTbl/FapTbl';

// ======================================================================================== [Import Component] CSS


function MyReview (props) {

    const { handlePageTitle, handleSystemCode } = props
    const [viewSelect, setViewSelect] = useState(1);

    useEffect(() => {
        handlePageTitle(myReviewLang.formTitle[cookies.load('site-lang')])
        handleSystemCode('sys1')
    },[])

    return (
        <div id = 'myReview' style ={{ display : 'flex', flexDirection : 'column'}} >
            <div style ={{ width : '100wv', display : 'flex', flexDirection : 'row', justifyContent : 'center' }}>
                <ButtonGroup variant="contained" color='sys1' size='small'>
                    <Button onClick={() => setViewSelect(1)}>{myReviewLang.myReview.buttonGroup.approval[cookies.load('site-lang')]}</Button>
                    <Button onClick={() => setViewSelect(2)}>{myReviewLang.myReview.buttonGroup.agreement[cookies.load('site-lang')]}</Button>
                    <Button onClick={() => setViewSelect(3)}>{myReviewLang.myReview.buttonGroup.recieve[cookies.load('site-lang')]}</Button>
                    <Button onClick={() => setViewSelect(4)}>{myReviewLang.myReview.buttonGroup.final_approval[cookies.load('site-lang')]}</Button>
                </ButtonGroup>
            </div>
            <div>
                {
                    viewSelect === 1 ? <AppTbl/> :<div/>
                }
                {
                    viewSelect === 2 ? <AgrTbl/> :<div/>
                }
                {
                    viewSelect === 3 ? <ReciTbl/> :<div/>
                }
                {
                    viewSelect === 4 ? <FapTbl/> :<div/>
                }

            </div>
        </div>
    )

}

export default MyReview;