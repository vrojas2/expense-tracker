import React, { createContext, useReducer } from "react";
import { getCurrentMonthEnEspanol } from "../util/getCurrentDate";
import { AppReducer } from "./AppReducer";
import { Data } from "../data/Data";

const initialState = {
  currentMonth: getCurrentMonthEnEspanol(),
  transactions: Data,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setMonth(month) {
    dispatch({
      type: "SET_CURRENT_MONTH",
      payload: month,
    });
  }

  function addTransaction(transaction, currentMonth) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { currentMonth, transaction },
    });
  }

  function deleteTransaction(id, currentMonth) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: { id, currentMonth },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        currentMonth: state.currentMonth,
        deleteTransaction,
        addTransaction,
        setMonth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
