function affiliationChange(index, event, emails, handleEmails){
    const newEmails = [...emails];
    newEmails[index].company = event.target.value;
    handleEmails(newEmails);
}

export default affiliationChange;