function companyChange(index, event, positions, handlePositions){
    const newPositions = [...positions];
    newPositions[index].company = event.target.value;
    handlePositions(newPositions);
}

export default companyChange;