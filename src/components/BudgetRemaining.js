import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetRemaining = () => {
    const { budgets, Currency, BudgetValue } = useContext(AppContext);

    if (!Array.isArray(budgets)) {
        return (
            <div className='alert alert-danger'>
                Remaining Budget is not available.
            </div>
        );
    }

    const totalbudget = () =>{
        return BudgetValue 

    }
    return (
        <div className='alert alert-success'>
            <span>Remaining: {Currency}{BudgetValue}</span>
        </div>
    );
};

export default BudgetRemaining;
