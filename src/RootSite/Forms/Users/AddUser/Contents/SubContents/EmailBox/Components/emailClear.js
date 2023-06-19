function emailClear(index, emails){
    const newEmails = [...emails];
    newEmails[index].email = '';
    return newEmails;
}

export default emailClear;