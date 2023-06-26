function affiliationClear(index, phones){
    const newPhones = [...phones];
    newPhones[index].company = '';
    return newPhones;
}

export default affiliationClear;