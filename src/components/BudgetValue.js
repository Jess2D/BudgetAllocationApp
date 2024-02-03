import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { Currency, spentSoFar} = useContext(AppContext);


    return (
        <div className='alert alert-primary' style={{  padding: '20px', height:'74px' }}>
            <span>Spent so far: {Currency}{spentSoFar}</span>
        </div>
    );
};

export default BudgetValue;
