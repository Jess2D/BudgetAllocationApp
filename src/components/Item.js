import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Item = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const changeBudget = (amount) => {
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: {
                department: props.department, 
                amount: amount
            }
        });
    };

    const removeItem = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: props.department
        });
    };

    return (
        <tr>
            <td>{props.department}</td>
            <td>{Currency}{props.unitbudget}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={() => changeBudget(10)} /></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={() => changeBudget(-10)} /></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={removeItem} /></td>
        </tr>
    );
};

export default Item;
