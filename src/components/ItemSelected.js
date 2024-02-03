import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const [department, setDepartment] = useState('');
    const [unitbudget, setUnitBudget] = useState('');
    const [action, setAction] = useState('Add');


    const isValidForm = department && unitbudget && !isNaN(unitbudget) && parseInt(unitbudget) !== 0;

    const submitEvent = () => {
        if (!isValidForm) {
            alert("Please fill in all fields correctly.");
            return;
        }
        
        const amount = action === "Reduce" ? -Math.abs(parseInt(unitbudget)) : Math.abs(parseInt(unitbudget));

        dispatch({
            type: 'CHANGE_BUDGET',
            payload: {
                department,
                amount, 
            },
        });

        
        setDepartment('');
        setUnitBudget('');
        setAction('Add');
        alert("Budget updated successfully."); 
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3 col-sm">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect01" 
                        value={department} 
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="">Choose...</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>

                <div className="input-group mb-3 col-sm">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Action</label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect02" 
                        value={action} 
                        onChange={(e) => setAction(e.target.value)}
                    >
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>
                </div>

                <div className="input-group mb-3 col-sm">
                    <span className="input-group-text">{Currency}</span>
                    <input
                        type='number'
                        className="form-control"
                        value={unitbudget}
                        onChange={(e) => setUnitBudget(e.target.value)}
                    />                
                    <button 
                    className="btn btn-primary " 
                    onClick={submitEvent} 
                    style={{ height: '38px', padding:'5px', width:'120px', marginLeft: '12px'}}
                    disabled={!isValidForm} 
                     >
                    Save
                   </button>
                </div>


            </div>
        </div>
    );
};

export default ItemSelected;
