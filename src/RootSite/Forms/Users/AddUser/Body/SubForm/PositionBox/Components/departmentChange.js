// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function departmentChange(index, event, positions, handlePositions){
  const newPositions = [...positions];
  newPositions[index].department = event.target.value;
  handlePositions(newPositions);
}

export default departmentChange;