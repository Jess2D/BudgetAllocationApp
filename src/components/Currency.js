import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, Currency } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_Currency',
            payload: val,
        });
    };

    return (
        <div className='alert alert-success'>
            Currency: 
            <select
                name='Currency'
                id='Currency'
                onChange={(event) => changeCurrency(event.target.value)}
                style={{ backgroundColor: '#d1e7dd', color: 'black', padding: '10px', border: 'none', width:'60%'}}
            >
                <option value='£' style={{ backgroundColor: '#d1e7dd', color: 'black', padding: '10px', border: 'none' }}>(Pound £)</option>
                <option value='₹'>(Rupias ₹)</option>
                <option value='€'>(Euro €)</option>
                <option value='$'>(Dollar $)</option>
            </select>
        </div>
    );
};

export default Currency;
