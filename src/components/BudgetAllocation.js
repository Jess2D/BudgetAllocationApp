import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetAllocation = () => {
    const { budgets, dispatch } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(0);


    const item = {
        department: department,
        quantity: parseInt(quantity),
    };
    const handleIncrease = () => {
        
        const newBudgetValue = budgetValue + 10;
        if (newBudgetValue <= 20000) {
            setBudgetValue(newBudgetValue);
            // Update the budget in the context
            dispatch({
                type: 'ADD_QUANTITY',
                payload: newBudgetValue,
            });
        }
    };

    const handleDecrease = () => {
        const newBudgetValue = budgetValue - 10;
        if (newBudgetValue >= getTotalSpent()) {
            setBudgetValue(newBudgetValue);
            // Update the budget in the context
            dispatch({
                type: 'RED_QUANTITY',
                payload: newBudgetValue,
            });
        }
    };

    const getTotalSpent = () => {
        return budgets.reduce((total, budget) => total + budget.quantity * budget.unitbudget, 0);
    };

    return (
        <div className='editable-budget'>
            <h4>Edit Budget</h4>
            <div>
                <button onClick={handleIncrease} disabled={budgetValue >= 20000}>+10</button>
                <input
                    type='number'
                    value={budgetValue}
                    onChange={(e) => {
                        const newValue = parseInt(e.target.value) || 0;
                        if (newValue >= getTotalSpent() && newValue <= 20000) {
                            setBudgetValue(newValue);
                            // Update the budget in the context
                            dispatch({
                                type: 'UPDATE_BUDGET',
                                payload: newValue,
                            });
                        }
                    }}
                />
                <button onClick={handleDecrease} disabled={budgetValue <= getTotalSpent()}>-10</button>
            </div>
        </div>
    );
};


export default BudgetAllocation;