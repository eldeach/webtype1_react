// ======================================================================================== [Import Libaray] Material Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';

const cardContent = {
    cdms:{
        icon:<LocalLibraryIcon/>,
        title:"CDMS",
        img:"img/library.jpg",
        description:"Manage document numbers, documents, and binders and check the status in real time.",
        navUrl:"/cdms"
    },
    vmp:{
        icon:<CalendarMonthIcon/>,
        title:"VMP",
        img:"img/library.jpg",
        description:"Manage validation strategies, information, and schedules, and monitor real-time status.",
        navUrl:"/vmp"
    },
    pqr:{
        icon:<AssessmentIcon/>,
        title:"PQR",
        img:"img/library.jpg",
        description:"Check and utilize the necessary data for writing the product quality assessment report in one place.",
        navUrl:"/pqr" 
    }
}

export default cardContent;