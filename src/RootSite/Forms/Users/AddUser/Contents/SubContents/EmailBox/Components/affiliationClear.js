function affiliationClear(index, emails){
    const newEmails = [...emails];
    newEmails[index].company = '';
    return newEmails;
}

export default affiliationClear;