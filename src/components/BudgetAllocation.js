// BudgetAllocation.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetAllocation = () => {
    const { Allocated, Currency, updateTotalBudget } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newAllocated = parseFloat(event.target.value) || 0;
        updateTotalBudget(newAllocated); // Esta é a função passada através do contexto
    };
    

    return (
        <div className='alert alert-secondary' style={{  padding: '20px', height:'74px'}}>
            Budget: {Currency}
            <input 
                type="number" 
                value={Allocated} 
                onChange={handleBudgetChange}
                style={{ width: '100px' }} 
            />
        </div>
    );
};

export default BudgetAllocation;
