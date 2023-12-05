// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]
import { Button, Chip,  Paper } from '@mui/material';
//icon
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// ======================================================================================== [Import Component] js
// Modal Button
import EmailModalButton from './ModalButton/EmailModalButton'




// ======================================================================================== [Import Component] CSS

function EmailRecorder (props){
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
        <Paper id='positionPaper' sx={style.paper} elevation={3}>
            <div style={style.subtitle.box}>
                <EmailIcon color='sys1'/>
                <div style={style.subtitle.text}>E-Mail</div>
            </div>
            { // 현재 이메일 배열 객체 정보 출력 iterator
                inheritedArr.map((oneItem, index)=>(
                <div style={style.arrItem.oneItem}>
                        <div style={style.arrItem.itemInfo}>
                            <Chip size="small" icon={<MailOutlineIcon size="small"/>} color='sys1' label={oneItem.email_address}/>
                            <div style={style.arrItem.subInfo}>
                                <Chip size="small" icon={<CategoryIcon size="small"/>} color='sys1' variant="outlined" label={oneItem.email_usage}/>
                                <Chip size="small" sx={{width:'100%',ml:0.8}} icon={<BusinessIcon size="small"/>} color='sys1' variant="outlined" label={oneItem.email_affiliation}/>
                            </div>
                        </div>
                        <div style={style.arrItem.delItem}>
                            <Button size="small" variant='contained' style={{height:'100%'}} sx={{p: 0}} color='error' onClick={()=>updateValue('user_email',arrDelElement(inheritedArr, index))}><DeleteForeverIcon/></Button>
                        </div>
                    </div>
                ))
            }
            <EmailModalButton
            inheritedArr = { inheritedArr }
            updateValue = { updateValue }
            />
        </Paper>
    )

}

export default EmailRecorder;