import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetAllocation = () => {
    const { Allocated, Currency, updateTotalBudget, spentSoFar } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newAllocated = parseFloat(event.target.value) || 0;
        // Ensure the new budget is not lower than the amount spent so far and does not exceed 20,000
        if (newAllocated >= spentSoFar && newAllocated <= 20000) {
            updateTotalBudget(newAllocated); // Update the budget if within the valid range
        } else if (newAllocated < spentSoFar) {
            alert('The budget cannot be lower than the amount spent so far.');
            updateTotalBudget(spentSoFar); // Reset to the minimum valid budget
        } else if (newAllocated > 20000) {
            alert('The budget cannot exceed 20,000.');
            updateTotalBudget(20000); // Set to the maximum valid budget
        }
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
