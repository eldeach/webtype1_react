import RootMenu from "./RootMenu";
import CdmsMenu from "../../ChildSite/CDMS/AppBar/CdmsMenu"

const appBars = {
    cdms:{
        title:"CDMS",
        listButton:CdmsMenu
    },
    vmp : {
        title:"VMP",
        listButton:RootMenu
    },
    pqr :{
        title :  "PQR",
        listButton:RootMenu
    },
    rootsite : {
        title : "Root Site",
        listButton:RootMenu
    }
}

export default appBars;