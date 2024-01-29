import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { budgets, Currency } = useContext(AppContext);

    if (!Array.isArray(budgets)) {
        return (
            <div className='alert alert-danger'>
                Budget is not available.
            </div>
        );
    }

    const totalbudget = budgets.reduce((total, item) => {
        return total + item.unitbudget * item.quantity;
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{totalbudget}</span>
        </div>
    );
};

export default BudgetValue;
