// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Component] js


const objArrDelBlankArr = function ( arr ) {

    let tempArr = [...arr];
    let delTarget = []
    let newTempArr = []
    
    tempArr.map((oneElement, elementIndex) => { 
        if( Array.isArray(oneElement) && oneElement.length === 0 ) {
            delTarget.push(elementIndex)
        }
    })

    tempArr.map((oneElement, elementIndex) => {
        if ( delTarget.indexOf(elementIndex) === -1 ) {
            newTempArr.push ( oneElement )
        }
    })

    if ( newTempArr.length === 0 ) {
        return [[]]
    } else {
        return newTempArr;
    }
};

export default objArrDelBlankArr;