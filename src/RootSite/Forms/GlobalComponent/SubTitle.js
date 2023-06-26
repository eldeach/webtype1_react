// ======================================================================================== [Import Libaray]
import * as React from 'react';


// ======================================================================================== [Import Material UI Libaray]  


// ======================================================================================== [Import Component] js


// ======================================================================================== [Import Component] CSS

function SubTitle (props){
    return(
        <div style={{ display:'flex', flexDirection:'row', alignItems:'center', fontSize:'medium' }}>
            {props.icon}
            <div style={{marginTop:'4px', marginLeft:'2px'}}>{props.text}</div>
        </div>
    )
}

export default SubTitle ;