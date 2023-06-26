function phoneClear(index, phones){
    const newPhones = [...phones];
    newPhones[index].phone = '';
    return newPhones;
}

export default phoneClear;