
import RootSite from "../../AppBar/Menu/Lists/ListsPackage"
import CdmsSite from "../../../ChildSite/CDMS/AppBarLists/ListsPackage"


const configAppBars = {
    cdms:{
        title:"CDMS",
        listPackage:CdmsSite
    },
    vmp : {
        title:"VMP",
        listPackage:RootSite
    },
    pqr :{
        title :  "PQR",
        listPackage:RootSite
    },
    rootsite : {
        title : "Root Site",
        listPackage:RootSite
    }
}

export default configAppBars;