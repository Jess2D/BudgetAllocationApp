import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_QUANTITY':
            return {
                ...state,
                budgets: state.budgets.map((budget) =>
                    budget.department === action.payload.department
                        ? { ...budget, quantity: budget.quantity + action.payload.quantity }
                        : budget
                ),
            };
        case 'RED_QUANTITY':
            return {
                ...state,
                budgets: state.budgets.map((budget) =>
                    budget.department === action.payload.department
                        ? {
                              ...budget,
                              quantity: Math.max(0, budget.quantity - action.payload.quantity),
                          }
                        : budget
                ),
            };
        case 'CHG_Currency':
            return {
                ...state,
                Currency: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    budgets: [
        { id: "IT", department: 'IT', quantity: 0, unitbudget: 500 },
        { id: "Finance", department: 'Finance', quantity: 0, unitbudget: 300 },
        { id: "HR", department: 'HR', quantity: 0, unitbudget: 40 },
        { id: "Marketing", department: 'Marketing', quantity: 0, unitbudget: 50 },
        { id: "Sales", department: 'Sales', quantity: 0, unitbudget: 70 },
    ],
    Currency: '£',
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalbudgets = state.budgets.reduce((total, item) => {
        return total + item.unitbudget * item.quantity;
    }, 0);

    return (
        <AppContext.Provider
            value={{
                budgets: state.budgets,
                BudgetValue: totalbudgets,
                dispatch,
                Currency: state.Currency,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};