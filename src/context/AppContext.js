import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
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
            case 'UPDATE_TOTAL_BUDGET': {
                const newTotalBudget = action.payload;
                const currentTotalBudget = state.budgets.reduce((total, budget) => total + budget.unitbudget, 0);
            
           
                const ratio = currentTotalBudget > 0 ? newTotalBudget / currentTotalBudget : 0;
            
                const updatedBudgets = state.budgets.map(budget => ({
                    ...budget,
                    
                    unitbudget: budget.unitbudget * ratio,
                }));
            
                return {
                    ...state,
                    budgets: updatedBudgets,
                    Allocated: newTotalBudget, 
                };
            }
            

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
    Allocated: 2000,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Calculate the total spent so far without 'quantity'
    const spentSoFar = state.budgets.reduce((acc, budget) => acc + budget.unitbudget, 0);

    // Calculate the remaining budget without 'quantity'
    const remainingBudget = state.Allocated - spentSoFar;


    const contextValue = {
        budgets: state.budgets,
        spentSoFar,
        remainingBudget,
        updateTotalBudget: (newBudget) => dispatch({ type: 'UPDATE_ALLOCATED_BUDGET', payload: newBudget }),
        dispatch,
        Currency: state.Currency,
        Allocated: state.Allocated,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
