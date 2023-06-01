import { Button, Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import './FrontCard.css';

function FrontCard(props){
    let navigate = useNavigate();


    return(
        <Paper elevation={3} className='front-card'>
            <div className='front-card-sec1'>
                <div>
                    <div className='sec1-icon'>{props.icon}</div>
                    <div className='sec1-title'>{props.title}</div>
                </div>
            </div>
            <div className='front-card-sec2'>
                <img className="sec2-img" src={props.img}/>
            </div>
            <div className='front-card-sec3'>
                <div className='sec3-text'>{props.description}</div>
            </div>
            <div className='front-card-sec4'>
                <Button variant="contained" size="small"onClick={()=>{navigate(props.navUrl)}}><LaunchIcon/></Button>
            </div>
        </Paper>
    )
}

export default FrontCard;