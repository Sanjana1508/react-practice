import React from 'react'

function Columns() {
    const items =[]
    return (

        <>
            {
                items.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>{item.title}</h1>
                    </React.Fragment>
                ))
            }
            <td>
                Name
            </td>
            <td>
                Sanjana
            </td>
        </>
    )
}

export default Columns

