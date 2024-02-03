import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let updatedBudgets = []; // Will be used to store the updated budgets array
    switch (action.type) {
        case 'ADD_QUANTITY':
            updatedBudgets = state.budgets.map((budget) =>
                budget.department === action.payload.department
                    ? { ...budget, unitbudget: budget.unitbudget + action.payload.quantity }
                    : budget
            );
            break;
        case 'RED_QUANTITY':
            updatedBudgets = state.budgets.map((budget) =>
                budget.department === action.payload.department
                    ? { ...budget, unitbudget: Math.max(0, budget.unitbudget - action.payload.quantity) }
                    : budget
            );
            break;
        case 'DELETE_ITEM':
            updatedBudgets = state.budgets.filter(budget => budget.department !== action.payload);
            break;
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
                    budgets: state.budgets.map((budget) =>
                        budget.department === action.payload.department
                            ? { ...budget, unitbudget: Math.max(0, budget.unitbudget + action.payload.amount) }
                            : budget
                    ),
                };
            
        case 'UPDATE_ALLOCATED_BUDGET':
            return {
                ...state,
                Allocated: action.payload
            };

            case 'UPDATE_TOTAL_BUDGET': {
                const newTotalBudget = action.payload;
                const currentTotalAllocated = state.budgets.reduce((acc, budget) => acc + budget.unitbudget, 0);
    
                // Calculate the ratio of new to old total budget
                const ratio = currentTotalAllocated !== 0 ? newTotalBudget / currentTotalAllocated : 0;
    
                // Update each department's unitbudget proportionally
                const updatedBudgets = state.budgets.map(budget => ({
                    ...budget,
                    unitbudget: budget.unitbudget * ratio
                }));
    
                return {
                    ...state,
                    budgets: updatedBudgets,
                    Allocated: newTotalBudget, // Update the total allocated budget
                };
            }
    

        default:
            return state;
    }

    const updatedAllocated = updatedBudgets.reduce((total, item) => {
        return total + item.unitbudget * item.quantity;
    }, 0);

    // Update state only if updatedBudgets has been modified
    if (updatedBudgets.length > 0) {
        return {
            ...state,
            budgets: updatedBudgets,
            Allocated: updatedAllocated,
        };
    }

    return state;
};

const initialState = {
    budgets: [
        { id: "IT", department: 'IT', quantity: 1, unitbudget: 0},
        { id: "Finance", department: 'Finance', quantity:1, unitbudget: 0},
        { id: "HR", department: 'HR', quantity: 1, unitbudget: 0 },
        { id: "Marketing", department: 'Marketing', quantity: 1, unitbudget: 0 },
        { id: "Sales", department: 'Sales', quantity: 1, unitbudget: 0 },
    ],
    Currency: '£',
    Allocated: 20088,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Calculate the total spent so far
    const spentSoFar = state.budgets.reduce((acc, budget) => acc + (budget.quantity * budget.unitbudget), 0);

    // Calculate the remaining budget
    const remainingBudget = state.Allocated - spentSoFar;

    // The context value provided to the components
    const contextValue = {
        budgets: state.budgets,
        spentSoFar,
        remainingBudget,
        dispatch,
        Currency: state.Currency,
        Allocated: state.Allocated,
        updateTotalBudget: (newBudget) => dispatch({ type: 'UPDATE_TOTAL_BUDGET', payload: newBudget }),
        // ... add any other context functions you need
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
