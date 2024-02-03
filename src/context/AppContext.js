import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        // These cases are removed because we are not using 'quantity'
        // case 'ADD_QUANTITY':
        // case 'RED_QUANTITY':

        case 'DELETE_ITEM':
            return {
                ...state,
                budgets: state.budgets.filter(budget => budget.department !== action.payload),
            };

        case 'CHG_Currency':
            return {
                ...state,
                Currency: action.payload,
            };

        case 'ALLOCATED':
            return {
                ...state,
                Allocated: action.payload,
            };

        case 'CHANGE_BUDGET':
            return {
                ...state,
                budgets: state.budgets.map(budget =>
                    budget.department === action.payload.department
                        ? { ...budget, unitbudget: Math.max(0, budget.unitbudget + action.payload.amount) }
                        : budget
                ),
            };

        case 'UPDATE_ALLOCATED_BUDGET':
            return {
                ...state,
                Allocated: action.payload,
            };

        case 'UPDATE_TOTAL_BUDGET':
            // This case is already well implemented.
            // No change needed unless business logic changes.
            break;

        default:
            return state;
    }

    // If no action type matched, just return the current state
    return state;
};

const initialState = {
    budgets: [
        { id: "IT", department: 'IT', unitbudget: 500 },
        { id: "Finance", department: 'Finance', unitbudget: 300 },
        { id: "HR", department: 'HR', unitbudget: 40 },
        { id: "Marketing", department: 'Marketing', unitbudget: 50 },
        { id: "Sales", department: 'Sales', unitbudget: 70 },
    ],
    Currency: '£',
    Allocated: 20088,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Calculate the total spent so far without 'quantity'
    const spentSoFar = state.budgets.reduce((acc, budget) => acc + budget.unitbudget, 0);

    // Calculate the remaining budget without 'quantity'
    const remainingBudget = state.Allocated - spentSoFar;

    // The context value provided to the components
    const contextValue = {
        budgets: state.budgets,
        spentSoFar,
        remainingBudget,
        dispatch,
        Currency: state.Currency,
        Allocated: state.Allocated,
        // ... add any other context functions you need
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
