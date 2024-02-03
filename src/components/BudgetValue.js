import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { Currency, spentSoFar} = useContext(AppContext);


    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{spentSoFar}</span>
        </div>
    );
};

export default BudgetValue;
