function affiliationChange(index, event, phones, handlePhones){
    const newPhones = [...phones];
    newPhones[index].company = event.target.value;
    handlePhones(newPhones);
}

export default affiliationChange;