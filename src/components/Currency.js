import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_Currency',
            payload: val,
        });
    };

    return (
        <div className='alert alert-secondary'>
            Currency{' '}
            <select
                name='Currency'
                id='Currency'
                onChange={(event) => changeCurrency(event.target.value)}
            >
                <option value='£'>Pound(£)</option>
                <option value='₹'>Rupias(₹)</option>
                <option value='€'>Euro(€)</option>
                <option value='$'>Dollar($)</option>
            </select>
        </div>
    );
};

export default Currency;
