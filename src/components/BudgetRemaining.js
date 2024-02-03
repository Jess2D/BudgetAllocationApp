import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetRemaining = () => {
    const { Currency, remainingBudget } = useContext(AppContext);

  
    return (
        <div className='alert alert-success' style={{  padding: '20px', height:'74px'}}>
            <span>Remaining: {Currency}{remainingBudget}</span>
        </div>
    );
};

export default BudgetRemaining;
