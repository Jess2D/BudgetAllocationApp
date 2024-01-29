import React, { useContext } from 'react';
import Item from './Item';
import { AppContext } from '../context/AppContext';

const List = () => {
    const { budgets } = useContext(AppContext);

    if (!Array.isArray(budgets)) {
        return (
            <div className='alert alert-danger'>
                Budget data is not available.
            </div>
        );
    }

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Decrease by 10</th>
                    <th scope='col'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {budgets.map((budget) => (
                    <Item
                        id={budget.id}
                        key={budget.id}
                        department={budget.department}
                        unitbudget={budget.unitbudget}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default List;
