
import RootSite from "../../../AppBarLists/ListsPackage"
import CdmsSite from "../../../../ChildSite/CDMS/AppBarLists/ListsPackage"


const configAppBars = {
    rootsite : {
        title : "Root Site",
        listPackage:RootSite
    },
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
    }
}

export default configAppBars;