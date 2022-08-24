import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
            </td>
            <td>
                <input type="text" required placeholder="Enter Product name" name="pname" value={editFormData.pname} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="number" required placeholder="Enter Quantity" name="quantity" value={editFormData.quantity} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="number" required placeholder="Enter Cost of product" name="rate" value={editFormData.rate} onChange={handleEditFormChange}></input>
            </td>
            <td></td>
            <td>
                <button type='submit'>Save</button>
            </td>
        </tr>
    )
}

export default EditableRow