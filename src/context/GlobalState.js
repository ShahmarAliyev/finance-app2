import react from "react";

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
