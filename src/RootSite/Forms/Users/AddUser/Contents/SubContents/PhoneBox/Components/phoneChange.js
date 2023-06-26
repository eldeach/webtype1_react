// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function phoneChange(index, event, phones, handlePhones, addField, removeField ){
    const newPhones = [...phones];
    newPhones[index].phone = event.target.value;
    handlePhones(newPhones);
    if (event.target.value.trim() !== ''){
      addField();
    }
    else{
      removeField(index)
    }
}

export default phoneChange;