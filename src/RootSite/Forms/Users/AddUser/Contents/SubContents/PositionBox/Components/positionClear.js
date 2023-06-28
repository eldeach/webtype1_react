function positionClear(index, positions){
    const newPositions = [...positions];
    newPositions[index].position = '';
    return newPositions;
}

export default positionClear;