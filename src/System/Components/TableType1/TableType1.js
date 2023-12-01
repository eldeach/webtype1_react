// ======================================================================================== [Import Libaray]
import { useState, useEffect } from 'react';
import { getCoreRowModel, useReactTable, flexRender, getFilteredRowModel, getFacetedUniqueValues, getSortedRowModel } from "@tanstack/react-table";

// ======================================================================================== [Import Material UI Libaray]

//icon


// ======================================================================================== [Import Component] js
import TableHeader from './TableHeader';

// ======================================================================================== [Import Component] CSS
import './TableType1.css'


// TableType1 props 작성 패턴
// <TableType1
// tableData = { tableData }
// tableColumnsDef = { tableColumnsDef }
// divStyle={{ divMaxWidth : '600px', divMaxHeight : '200px', borderRadius :'10px', overflow : 'auto'}}
// tableStyle = {{ }}
// headerStyle = {{ fontSize : '12px' }}
// rowStyle = {{ fontSize : '20px' }} // 일괄 모든 row에 스타일 적용, columnDef의 cell 렌더가 우선순위가 높음
// footerOn = { false }
// handlePullOutSelected = { handlePullOutSelected }
// />

function TableType1 (props) {

    const { tableData, tableColumnsDef, divStyle, tableStyle, headerStyle, rowStyle, footerOn, handlePullOutSelected } = props;

    const [ data, setData ] = useState([]);
    // props 중 tableData 정의 패턴
    // const tableData = [
    //     {
    //         id: "id111",
    //         name: "user_name1",
    //     },
    //     {
    //         id: "id222",
    //         name: "user_name1",
    //     },
    //     {
    //         id: "id333",
    //         name: "user_name1",
    //     }
    // ]

    const [ columns, setColumns ] = useState([]);
    // props 중 tableColumnsDef 정의 패턴
    // const columnHelper = createColumnHelper();
    // const tableColumnsDef = [  // TanStack Table은 컬럼 사이즈가 20이 최소
    //     { // row selection 할꺼면
    //         id: "select",
    //         size:20, // TanStack Table은 컬럼 사이즈가 20이 최소
    //         header: ({ table }) => (
    //         <IndeterminateCheckbox
    //             {...{
    //             checked: table.getIsAllRowsSelected(),
    //             indeterminate: table.getIsSomeRowsSelected(),
    //             onChange: table.getToggleAllRowsSelectedHandler(),
    //             }}
    //         />
    //         ),
    //         cell: ({ row }) => (
    //         <IndeterminateCheckbox
    //             {...{
    //             checked: row.getIsSelected(),
    //             disabled: !row.getCanSelect(),
    //             indeterminate: row.getIsSomeSelected(),
    //             onChange: row.getToggleSelectedHandler(),
    //             }}
    //         />
    //         ),
    //     },
    //     columnHelper.accessor( "code",
    //         {
    //             header: { kor : "권한코드", eng : "authcode" },
    //             size: 300,
    //             enableColumnFilter: true,
    //             footer: info => info.column.id,
    //         }
    //     ),
    //     columnHelper.accessor( "name",
    //         {
    //             header: { kor : "시스템", eng : "system" },
    //             size: 200,
    //             footer: info => info.column.id,
    //             cell: renderValue => (
    //                 <div style={{ fontSize: '10px', color: 'red', fontWeight: 'bold', borderRadius: '4px', border: '1px solid red', background: 'blue' }}>
    //                     { renderValue.getValue() }
    //                 </div>
    //             )
    //         }
    //     ),
    // ]


    const [rowSelection, setRowSelection] = useState({});
    // props handlePullOutSelected 정의 패턴
    // const [tableSelected,setTableSelected] = useState([]);
    // const handlePullOutSelected = function (newArr) {
    //     setTableSelected(newArr)
    // }

    const RowSelectionChange = function ( newArr ) {
        setRowSelection( newArr ) // rowSelection 값 업데이트
        handlePullOutSelected( table.getSelectedRowModel().flatRows ) // handlePullOutSelected 업데이트
    }


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel(),
        getSortedRowModel : getSortedRowModel(), // 정렬함수, useReactable 생성자에 import하고 끝
        getFilteredRowModel : getFilteredRowModel(), // 필터함수, useReactable 생성자에 import하고 끝
        getFacetedUniqueValues : getFacetedUniqueValues(), // 컬럼의 고유값을 배열로 출력하는 함수, 생성자에 import하고 끝
        state : {
            rowSelection : rowSelection, // rowSelection : 선택된 row 상태 저장
        },
        onRowSelectionChange : RowSelectionChange, // 선택사항이 바뀔 때 수행할 함수, onChange 같은 거
        enableRowSelection : true, // selection을 허용할지 여부, row => row.original.age > 18 이런식으로 선택할 수 있는 범위를 한정할 수 있는듯 (from 유투브 - TanStack React Table v8 - Part 5 - Row Selection, Checkbox selection, Display Selected Rows)
    })

    useEffect(() => {
        setColumns( tableColumnsDef )
        setData( tableData )
        handlePullOutSelected( table.getSelectedRowModel().flatRows )
    },[][rowSelection])
    
    return (
        <div className = "table-type-1" style ={{ ...divStyle }}>
            <table style={{ ...tableStyle }}>
                <thead>
                    {
                        table.getHeaderGroups().map( headerGroup => (
                            <tr key = { headerGroup.id } style={{ ...headerStyle }}>
                                {
                                    headerGroup.headers.map( header => (
                                        <TableHeader key = { header.id } header = { header } table = { table }/>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map( row => (
                            <tr key = { row.id } style={{ ...rowStyle }}>
                                {
                                    row.getVisibleCells().map( cell => (
                                        <td key = { cell.id } >
                                            {
                                                flexRender( cell.column.columnDef.cell, cell.getContext() )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
                {
                    footerOn ? 
                    <tfoot>
                        {
                            table.getFooterGroups().map( footerGroup => (
                                <tr key = { footerGroup.id }>
                                    {
                                        footerGroup.headers.map( header => (
                                            <th key = { header.id }>
                                                {
                                                    header.isPlaceholder ? null
                                                    : flexRender( header.column.columnDef.footer, header.getContext() )
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tfoot>
                    : null
                }
            </table>
            <div style ={{fontSize : headerStyle.fontSize}}>
                {
                    table.getSelectedRowModel().flatRows.length > 0 ? <div>{"Selected : ".concat(table.getSelectedRowModel().flatRows.length)}</div> :
                    <div/>
                }
                {/* <ul>
                { table.getSelectedRowModel().flatRows.map((el) => {
                    return <li key={el.id}>{JSON.stringify(el.original)}</li>;
                })}
                </ul> */}
            </div>
        </div>
    )
}

export default TableType1;