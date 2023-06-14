// ======================================================================================== [Import Libaray]
import cookies from 'react-cookies'

// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS




function setCookies(value){
    cookies.save('site-lang',value,{path :'/'})
}

export default setCookies;