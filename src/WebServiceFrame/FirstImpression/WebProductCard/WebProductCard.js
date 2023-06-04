// ======================================================================================== [Import Libaray]
import { useNavigate  } from 'react-router-dom';

// ======================================================================================== [Import Libaray] Material UI
import { Button, Paper } from '@mui/material';

// ======================================================================================== [Import Libaray] Material Icon
import LaunchIcon from '@mui/icons-material/Launch';

// ======================================================================================== [Import Component] CSS
import './WebProductCard.css';

function WebProductCard(props){
    let navigate = useNavigate();


    return(
        <Paper elevation={3} className='web-product-card'>
            <div className='web-product-card-sec1'>
                <div>
                    <div className='sec1-icon'>{props.icon}</div>
                    <div className='sec1-title'>{props.title}</div>
                </div>
            </div>
            <div className='web-product-card-sec2'>
                <img alt = "web-product-img" className="sec2-img" src={props.img}/>
            </div>
            <div className='web-product-card-sec3'>
                <div className='sec3-text'>{props.description}</div>
            </div>
            <div className='web-product-card-sec4'>
                <Button variant="contained" size="small"onClick={()=>{navigate(props.navUrl)}}><LaunchIcon/></Button>
            </div>
        </Paper>
    )
}

export default WebProductCard;