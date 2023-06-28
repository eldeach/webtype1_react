// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function positionChange(index, event, positions, handlePositions, addField, removeField ){
    const newPositions = [...positions];
    newPositions[index].position = event.target.value;
    handlePositions(newPositions);
    if (event.target.value.trim() !== ''){
      addField();
    }
    else{
      removeField(index)
    }
}

export default positionChange;