import { TransactionType, Actions } from '../Types/Type'

const AppReducer = (state: { transactions: TransactionType[] }, action: Actions) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_INCOME":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "CLEAR_ALL_TRANSACTION":
      return {
        transactions: []
      };
    default:
      return state;
  }
};

export default AppReducer;