import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetAllocation = () => {    

    const { Allocated, Currency, BudgetValue} = useContext(AppContext);
    return (
        <div className='alert alert-success'>
            <span>Budget: {Currency}{Allocated}</span>
        </div>
    );
};

export default BudgetAllocation;
