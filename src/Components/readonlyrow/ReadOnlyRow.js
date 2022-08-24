import React from 'react'
import './readonlyrow.css'

const ReadOnlyRow = ({allDetail,handleEditClick,handleDeleteClick}) => {
    return (
            <tr>
                <td></td>
                <td>{allDetail.pname}</td>
                <td>{allDetail.quantity}</td>
                <td>{allDetail.rate}</td>
                <td>{allDetail.quantity * allDetail.rate}</td>
                <td>
                    <button type='button' onClick={(e)=> handleEditClick(e,allDetail)}>Edit</button>
                    <button type='button' id='delete' onClick={()=> handleDeleteClick(allDetail.id)}>Delete</button>
                </td>
            </tr>
    )
}

export default ReadOnlyRow