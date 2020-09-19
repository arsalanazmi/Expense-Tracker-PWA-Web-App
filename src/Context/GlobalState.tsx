import React, { createContext, useReducer } from "react";
import {TransactionType, contextStates} from '../Types/Type'

// Import the Reducer
import AppReducer from "./AppReducer";

// Create Initial State
const initialState:contextStates = {
  transactions: [],
  deleteTransaction: () => {},
  addIncome: () => {},
  addExpense: () => {},
  clearTransactions: () => {}
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider For Global Context
export const GlobalProvider: React.FC  = ({ children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions For Transactions
  function deleteTransaction(id:string) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addIncome(transaction:TransactionType) {
    dispatch({
      type: "ADD_INCOME",
      payload: transaction,
    });
  }

  function addExpense(transaction:TransactionType) {
    dispatch({
      type: "ADD_EXPENSE",
      payload: transaction,
    });
  }

  function clearTransactions(transactions:TransactionType[]) {
    dispatch({
      type: "CLEAR_ALL_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addIncome,
        addExpense,
        clearTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};