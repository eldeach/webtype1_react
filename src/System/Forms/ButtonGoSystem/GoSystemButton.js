// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'
import { useState } from 'react';

// ======================================================================================== [Import Material UI Libaray]
import { Button, Modal, Paper } from '@mui/material';
//icon
import GridViewIcon from '@mui/icons-material/GridView';
import InfoIcon from '@mui/icons-material/Info';

// ======================================================================================== [Import Component] js
import goSystemButtonLang from './goSystemButtonLang'
import menuConfig from '../../SystemMenu/menuConfig'
import systemThemes from '../../systemThemes'
import { useNavigate } from 'react-router-dom';

// ======================================================================================== [Import Component] CSS

function GoSystemButton (props) {

    const navigate = useNavigate();

    const style = {
        subtitle:{
            box : {
                display:'flex', flexDirection:'column', alignItems:'center', fontSize:'medium'
            },
            text : {
                fontSize : '20px', marginTop:'4px', marginLeft:'2px'
            }
        },
        descriptionBox : {
            marginTop:'20px',
            marginBottom : '20px',
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
            width : 345,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            p: 2,
        },
    }
    
    const [popup,setPopup] = useState(0);
    const handleModalClose = () => setPopup(0);

    const { handlePageTitle, handleSystemCode } = props;

    return (
        <div>
            <Button variant="outlined" color = "white" size="small" onClick={()=>setPopup(1)}>{goSystemButtonLang.displayedButton[cookies.load('site-lang')]}</Button>
            <Modal open={(popup === 1)} onClose={handleModalClose}>
                <Paper id='goSystemPaper' sx={style.popupPaper} elevation={3}>
                    <div className = "popup-close-button-box"><button className='popup-close-button' onClick={handleModalClose}>X</button></div>
                    <div style={style.subtitle.box}>
                        <GridViewIcon color='sys1' sx={{fontSize : 'xx-large'}}/>
                        <div style={style.subtitle.text}>{goSystemButtonLang.goSystemPaper.title[cookies.load('site-lang')]}</div>
                    </div>
                    <div style={style.descriptionBox}>
                        <InfoIcon color = 'sys1' fontSize="medium"/>
                        <p style={style.description}>{goSystemButtonLang.goSystemPaper.text.p1[cookies.load('site-lang')]}</p>
                        <p style={style.description}>{goSystemButtonLang.goSystemPaper.text.p2[cookies.load('site-lang')]}</p>
                    </div>
                    <div>
                    {
                        Object.keys(menuConfig).map((one, index) => {
                            let disableButton = false;
                            if (!systemThemes.palette[one]) disableButton = true
                            return (
                                <Button
                                key = { index }
                                disabled={ disableButton }
                                variant="contained"
                                sx={{ width:70, height:70, ml:1, mr:1, mb:1 }}
                                color = { one }
                                size="small"
                                onClick={() => {
                                    handleSystemCode(one)
                                    handlePageTitle('')
                                    navigate('/')
                                    handleModalClose()
                                }}>
                                    {menuConfig[one].name}
                                </Button>
                            )
                        })
                    }
                    </div>
                </Paper>
            </Modal>
        </div>
    )
}

export default GoSystemButton;