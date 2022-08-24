import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './form.css'
import ReadOnlyRow from '../readonlyrow/ReadOnlyRow';
import EditableRow from '../EditableRow';

const Form = () => {
    const [allDetails, setAllDetails] = useState([{ pname: 'centerfresh', quantity: '10', rate: '4', }])
    const [addFormData, setAddFormData] = useState({
        pname: "",
        quantity: "",
        rate: "",
    });

    let total = `${addFormData.quantity * addFormData.rate}`

    const [editFormData, setEditFormData] = useState({
        pname: "",
        quantity: "",
        rate: "",
    });

    const [editDetails, setEditDetails] = useState(null);

    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newDetail = {
            id: nanoid(),
            pname: addFormData.pname,
            quantity: addFormData.quantity,
            rate: addFormData.rate,
        };

        const addNewDetail = [...allDetails, newDetail];
        setAllDetails(addNewDetail);
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedDetail = {
            id: editDetails,
            pname: editFormData.pname,
            quantity: editFormData.quantity,
            rate: editFormData.rate,
        };

        const addNewDetail = [...allDetails];

        const index = allDetails.findIndex((allDetail) => allDetail.id === editDetails);

        addNewDetail[index] = editedDetail;

        setAllDetails(addNewDetail);
        setEditDetails(null);
    };

    const handleEditClick = (e, allDetail) => {
        e.preventDefault();
        setEditDetails(allDetail.id);

        const formValues = {
            pname: allDetail.pname,
            quantity: allDetail.quantity,
            rate: allDetail.rate,
        };


        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditDetails(null);
    };

    const handleDeleteClick = (allDetailId) => {
        const addnewDetail = [...allDetails];

        const index = allDetails.findIndex((allDetail) => allDetail.id === allDetailId);

        addnewDetail.splice(index, 1);

        setAllDetails(addnewDetail);
    };

    let idx = 1;

    return (
        <>
            <div className="app-container">
                <form onSubmit={handleAddFormSubmit} className='hello' >
                    <div className='input-form'>
                        <label>Product Name </label>
                        <input type="text" required name='pname' placeholder='Enter product name' onChange={handleAddFormChange} />
                    </div>
                    <div className='input-form'>
                        <label>Quantity </label>
                        <input type="number" required name='quantity' placeholder='Enter Quantity' onChange={handleAddFormChange} />
                    </div>
                    <div className='input-form'>
                        <label>Rate </label>
                        <input type="number" required name='rate' placeholder='Enter Cost' onChange={handleAddFormChange} />
                    </div>
                    <div className='input-form'>
                        <span id='total'>Total:</span>
                        <span> {total}</span>
                    </div>
                    <div className='input-form'>
                        <button type='submit'>Add</button>
                    </div>
                </form >


                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDetails.map((allDetail) => (
                                <>
                                    <div id='prob'>{idx++}.</div>
                                    {editDetails === allDetail.id ? (
                                        <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} id='prob2'/>
                                        ) : (
                                        <ReadOnlyRow allDetail={allDetail} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>

        </>
    )
}

export default Form