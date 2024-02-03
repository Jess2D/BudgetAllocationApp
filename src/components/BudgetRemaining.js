import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetRemaining = () => {
    const { Currency, remainingBudget } = useContext(AppContext);

  
    return (
        <div className='alert alert-success'>
            <span>Remaining: {Currency}{remainingBudget}</span>
        </div>
    );
};

export default BudgetRemaining;
