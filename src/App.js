import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import BudgetValue from './components/BudgetValue';
import List from './components/List';
import ItemSelected from './components/ItemSelected';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company Budget Allocatoon</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <BudgetValue />
                        <Currency />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation </h3>
                <div className='row '>
                    <div className='col-sm'>
                        <List />
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
