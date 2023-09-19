// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js
import langCodeBook from '../../../../../../../GlobalObject/Configure/Language/langCodeBook';

// ======================================================================================== [Import Component] CSS


const emailCat  = [
    {label:langCodeBook.roosite.form.users.AddUser.input.user_email.catLabel.personal[cookies.load('site-lang')], value:"personal", id:0},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_email.catLabel.company[cookies.load('site-lang')], value:"company", id:1},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_email.catLabel.work[cookies.load('site-lang')], value:"work", id:2},
    {label:langCodeBook.roosite.form.users.AddUser.input.user_email.catLabel.other[cookies.load('site-lang')], value:'other', id:3}
]

export default emailCat;