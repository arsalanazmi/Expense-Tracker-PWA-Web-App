export type TransactionType = {
    id: string;
    description: string;
    transactionAmount: number,
    // incomeAmount: number;
    // expenseAmount: number;
}

export type Actions =
    | { type: "ADD_INCOME", payload: TransactionType }
    | { type: "ADD_EXPENSE", payload: TransactionType }
    | { type: "DELETE_TRANSACTION", payload: string }
    | { type: "CLEAR_ALL_TRANSACTION", payload: TransactionType[] }

export type contextStates = {
    transactions: {
        id: string;
        description: string;
        transactionAmount: number;
        // incomeAmount: number;
        // ExpenseAmount: number;
    }[];
    deleteTransaction: (id: string) => void;
    addIncome: (transaction: TransactionType) => void;
    addExpense: (transaction: TransactionType) => void;
    clearTransactions: (transaction: TransactionType[]) => void;
};