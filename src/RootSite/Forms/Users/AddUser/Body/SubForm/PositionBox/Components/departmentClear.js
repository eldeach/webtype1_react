function departmentClear(index, positions){
    const newPositions = [...positions];
    newPositions[index].department = '';
    return newPositions;
}

export default departmentClear;