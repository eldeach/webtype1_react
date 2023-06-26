// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../../Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS


const emailCat  = [
    {label:langCodeBook.roosite.form.users.AddUser.input.user_phone.catLabel.personal[cookies.load('site-lang')], value:"personal", id:0},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_phone.catLabel.company[cookies.load('site-lang')], value:"company", id:1},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_phone.catLabel.work[cookies.load('site-lang')], value:"work", id:2},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_phone.catLabel.other[cookies.load('site-lang')], value:'other', id:3}
]

export default emailCat;