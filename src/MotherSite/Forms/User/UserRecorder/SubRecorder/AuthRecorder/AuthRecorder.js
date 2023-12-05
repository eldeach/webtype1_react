// ======================================================================================== [Import Libaray]

// ======================================================================================== [Import Material UI Libaray]
import { Button, Chip, Paper } from '@mui/material';

//icon

import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';
import TitleIcon from '@mui/icons-material/Title';
import RouteIcon from '@mui/icons-material/Route';
import GppGoodIcon from '@mui/icons-material/GppGood';
// ======================================================================================== [Import Component] js

// Modal Button
import AuthModalButton from './ModalButon/AuthModalButton'

// objArrHandler



// ======================================================================================== [Import Component] CSS

function AuthRecorder (props){
    const { inheritedArr, updateValue } = props

    const style = {
        subtitle:{ // SubRecorder subtitle div 스타일
            box : {
                display:'flex', flexDirection:'row', alignItems:'center', fontSize:'medium'
            },
            text : {
                marginTop:'4px', marginLeft:'2px'
            }
        },
        descriptionBox : {
            boxSizing : 'border-box',
            fontSzie : '7px',
            color : 'orange',
            whiteSpace : 'pre-wrap',
            worWrap : 'break-word',
            textAlign : 'center',
        },
        paper : { // SubRecorder Paper 객체 스타일
            width:500,
            p: 2,
            mb:2
        },
        arrItem : { // SubRecorder에서 다루는 값이 배열이면 이 속성이 있음
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
    }

    const arrDelElement = function (arr, index) {
        let tempArr = [...arr];
        tempArr.splice(index, 1);
        return tempArr;
    };

    return (
        <Paper id='authPaper' sx={style.paper} elevation={3}>
            <div style={style.subtitle.box}>
                <GppGoodIcon color='sys1'/>
                <div style={style.subtitle.text}>Authority</div>
            </div>
            { // 현재 폰 배열 객체 정보 출력 iterator
                inheritedArr.map((oneItem, index)=>(
                <div style={style.arrItem.oneItem}>
                        <div style={style.arrItem.itemInfo}>
                            <div style={style.arrItem.subInfo}>
                                <Chip size="small" sx={{mb:1}} icon={<VpnKeyIcon size="small"/>} color='sys1' variant="outlined" label={`Code : ${oneItem.auth_code}`}/>
                                <Chip size="small" sx={{ml:'auto', mb:1}} icon={<DeveloperBoardIcon size="small"/>} color='sys1' variant="outlined" label={`System Code : ${oneItem.system_code}`}/>
                            </div>
                            <Chip size="small" sx={{mb:1}} icon={<TitleIcon size="small"/>} color='sys1' variant="outlined" label={`Auth Title : ${oneItem.auth_title}`}/>
                            <Chip size="small" sx={{mb:1}} icon={<RouteIcon size="small"/>} color='sys1' variant="outlined" label={`Allowed Path "${oneItem.url_path}"`}/>
                            <div>
                                <Chip size="small" icon={<InfoIcon size="small"/>} color='sys1' variant="outlined" label={"Description"}/>
                            </div>
                            <div style={style.descriptionBox}>{oneItem.auth_description}</div>
                        </div>
                        <div style={style.arrItem.delItem}>
                            <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>updateValue('user_auth',arrDelElement(inheritedArr, index))}><DeleteForeverIcon/></Button>
                        </div>
                    </div>
                ))
            }
            <AuthModalButton
            inheritedArr = { inheritedArr }
            updateValue = { updateValue }
            />
        </Paper>
    )

}

export default AuthRecorder;