// ======================================================================================== [Import Libaray]
import { createColumnHelper } from "@tanstack/react-table";

// ======================================================================================== [Import Material UI Libaray]
//icon

// ======================================================================================== [Import Component] js
import IndeterminateCheckbox from '../../../TableObj/TableType1/Components/IndeterminateCheckbox'
    
const columnHelper = createColumnHelper();
const columnDef = [  // TanStack Table은 컬럼 사이즈가 20이 최소
    { // row selection 할꺼면
        id: "select",
        size:20, // TanStack Table은 컬럼 사이즈가 20이 최소
        header: ({ table }) => (
        <IndeterminateCheckbox
            {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
            }}
        />
        ),
        cell: ({ row }) => (
        <IndeterminateCheckbox
            {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
            }}
        />
        ),
    },
    columnHelper.accessor( "user_account",
        {
            header: { kor : "사용자 계정", eng : "User Account" },
            size: 150,
            enableColumnFilter: true,
        }
    ),
    columnHelper.accessor( "user_name",
        {
            header: { kor : "사용자명", eng : "User Name" },
            size: 150,
            enableColumnFilter: true,
        }
    ),
    columnHelper.accessor( "job_team",
        {
            header: { kor : "팀", eng : "Team" },
            size: 150,
            enableColumnFilter: true,
        }
    ),
    columnHelper.accessor( "job_position",
        {
            header: { kor : "직위", eng : "Position" },
            size: 150,
            enableColumnFilter: true,
        }
    ),
    columnHelper.accessor( "job_company",
        {
            header: { kor : "회사", eng : "Company" },
            size: 150,
            enableColumnFilter: true,
        }
    ),
]

export default columnDef;