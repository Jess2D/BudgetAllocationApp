import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { Currency, BudgetValue} = useContext(AppContext);


    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{BudgetValue}</span>
        </div>
    );
};

export default BudgetValue;
