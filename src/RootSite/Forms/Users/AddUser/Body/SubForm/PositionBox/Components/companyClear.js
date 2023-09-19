function companyClear(index, positions){
    const newPositions = [...positions];
    newPositions[index].company = '';
    return newPositions;
}

export default companyClear;