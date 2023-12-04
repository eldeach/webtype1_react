// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Component] js
import objArrAddElementLang from './objArrAddElementLang'

const objArrAddElement = function (arr, newElement, pkStr) {
    let duplication = 0
    let tempArr = [...arr];

    if ( pkStr ) {
        tempArr.map((oneItem, index) => {
            if(oneItem[pkStr] === newElement[pkStr]){
                duplication += 1;
                alert(objArrAddElementLang.alertMsg.pkDuplicated[cookies.load('site-lang')].concat(pkStr+" : "+newElement[pkStr]+" )"))
            }
        })
    }

    if (duplication === 0){
        tempArr.push(newElement);
    }
    else {
        
    }
    return tempArr;
};

export default objArrAddElement;