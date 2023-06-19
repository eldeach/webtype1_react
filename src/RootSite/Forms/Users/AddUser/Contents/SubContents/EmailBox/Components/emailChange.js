// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS


function emailChange(index, event, emails, handleEmails, addField, removeField){
    const newEmails = [...emails];
    newEmails[index].email = event.target.value;
    handleEmails(newEmails);
    if (event.target.value.trim() !== ''){
      addField();
    }
    else{
      removeField(index)
    }
}

export default emailChange;