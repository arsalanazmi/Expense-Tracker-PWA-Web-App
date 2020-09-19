import React, { useContext } from "react";
import { TransactionType } from '../Types/Type'

// import Global State
import { GlobalContext } from "../Context/GlobalState"

export const Transactions: React.FC<TransactionType> = ({ id, description, transactionAmount }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transactionAmount > 0 ? "+" : "-";
  const transactionType = transactionAmount > 0 ? "plus" : "minus";


  return (
    <div>
      <li className={transactionType}>
        {description}
        <span>
          {sign}
          {Math.abs(transactionAmount)} PKR
        </span>
        <button className='btn btn-danger delete' onClick={() => deleteTransaction(id)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </li>
    </div>
  );
};
