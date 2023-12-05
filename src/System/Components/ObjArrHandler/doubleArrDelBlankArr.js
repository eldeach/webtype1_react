// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Component] js


const doubleArrDelBlankArr = function ( arr ) {

    let tempArr = [...arr];
    let delTarget = []
    let newTempArr = []
    
    tempArr.map((oneElement, elementIndex) => { 
        if( Array.isArray(oneElement) && oneElement.length === 0 ) {
            delTarget.push(elementIndex) // 안쪽 배열의 길이가 0인 요소가 있으면 삭제 대상으로 편입
        }
    })

    tempArr.map((oneElement, elementIndex) => {
        if ( delTarget.indexOf(elementIndex) === -1 ) {
            newTempArr.push ( oneElement ) // 삭제 대상에 없는 것만 새로운 배열로 편입
        }
    })

    if ( newTempArr.length === 0 ) {
        return [[]] // 새로운 배열에 안쪽 배열이 없는 경우 이렇게 리턴
    } else {
        return newTempArr;
    }
};

export default doubleArrDelBlankArr;