function purposeChange(index, event, value, emails, handleEmails){
    console.log(value.value)
    const newEmails = [...emails];
    newEmails[index].type = value.value;
    handleEmails(newEmails);
}

export default purposeChange;