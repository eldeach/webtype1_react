
// ======================================================================================== [Import Libaray]


// ======================================================================================== [Import Material UI Libaray]


// ======================================================================================== [Import Component] js
import Tbl1NoFooter from '../../../../../System/TableObj/TableType1/PreMade/Tbl1NoFooter'
import columnDef from './columnDef'

// ======================================================================================== [Import Component] CSS

function Areement (){
    return (
        <Tbl1NoFooter
        getUrl = {'/getmyreviewlist'}
        params = {{
            sys_code : 'sys1',
            approval_type : 'AGREEMENT',
        }}
        columnDef = {columnDef}
        />
    )
}

export default Areement;