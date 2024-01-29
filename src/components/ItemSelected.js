import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const [department, setDepartment] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');
    

    const submitEvent = () => {

        const item = {
            department: department,
            quantity: parseInt(quantity),
        };

        if(action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'ADD_QUANTITY',
                    payload: item,
                });
            }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Departament</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setDepartment(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="IT" name="IT"> IT</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="HR" name="HR">HR</option>
                        <option value="Marketing" name="Marketing">Marketing</option>
                        <option value="Sales" name="Sales">Sales</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                  <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
                    {Currency}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{size: 10}}
                        onChange={(event) => setQuantity(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default ItemSelected;