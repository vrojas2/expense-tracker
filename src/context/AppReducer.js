export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.payload.currentMonth]: state.transactions[
            action.payload.currentMonth
          ].filter((transaction) => transaction.id !== action.payload.id),
        },
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.payload.currentMonth]: [
            ...state.transactions[action.payload.currentMonth],
            action.payload.transaction,
          ],
        },
      };

    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: { ...state.transactions, ...action.payload },
      };

    case "SET_CURRENT_MONTH":
      return {
        ...state,
        currentMonth: action.payload,
      };

    default:
      return state;
  }
};
