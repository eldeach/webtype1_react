// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]
import { IconButton, Chip, Paper } from '@mui/material';
//icon
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS
// import './UserCard.css'

function UserCard(props) {
    const style = {

        cardPaper : {
            width:300,
            height:200,
            p:1,
            m:2,
            overflow:'hidden'
        },
    }

    return (
        <Paper id={`cardPaper${props.cardIndex}`} sx={style.cardPaper} elevation={3}>
            <div style={{ display : 'flex', flexDirection : 'column', height : '196px' }}>
                <Chip
                size="small"
                icon={<AccountCircleIcon size="small"/>}
                color='sys1'
                variant="outlined"
                sx={{
                    width: 150,
                    mb:0.4,
                    height: 'auto',
                    '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                    wordWrap:'break-word'
                    },
                }}
                label={props.oneItem.user_account}
                />
                <div className = 'user-card-body' style = {{ flexGrow : 1, overflowY : 'auto' }}>
                    <Chip
                    size="small"
                    icon={<BadgeIcon size="small"/>}
                    color='sys1'
                    variant="outlined"
                    sx={{
                        width: 260,
                        mb:0.4,
                        height: 'auto',
                        '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                        wordWrap:'break-word'
                        },
                    }}
                    label={props.oneItem.user_name}
                    />
                    <div>
                        {
                            JSON.parse( props.oneItem.user_position ).map(( onePosition, index ) => {
                                return (
                                    <div>
                                        <Chip
                                        size="small"
                                        icon={<WorkIcon size="small"/>}
                                        color='sys1'
                                        variant="outlined"
                                        sx={{
                                            width: 260,
                                            mb:0.4,
                                            height: 'auto',
                                            '& .MuiChip-label': {
                                            display: 'block',
                                            whiteSpace: 'normal',
                                            wordWrap:'break-word'
                                            },
                                        }}
                                        label={`${onePosition.job_position} / ${onePosition.job_team} / ${onePosition.job_company}`}
                                        />
                                    </div>
                                )
                        })
                        }
                    </div>
                </div>
                <div style = {{ width : '296px', display : 'flex', flexDirection : 'row' }}>
                    <div style= {{ flexGrow : 1 }} />
                    <IconButton
                    size = "small"
                    edge = "end"
                    color = 'sys1'
                    sx = {{  m : 0, p : 0 }}
                    >
                        <ZoomInIcon/>
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default UserCard;