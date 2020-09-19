import React, { useContext } from "react";
import { makeStyles, Button, Typography, Divider } from "@material-ui/core";
import red from '@material-ui/core/colors/red';

// import Transaction Component
import { Transactions } from "./Transactions";

// import Global State
import { GlobalContext } from "../Context/GlobalState";

const useStyles = makeStyles((theme) => ({
  history: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '5%',
  },
  listCaption: {
    fontWeight: 'bold',
  },
  clearButton: {
    width: '100%',
    padding: '2% 0',
    backgroundColor: red[800],
    color: 'white',
    '&:hover': {
      backgroundColor: red[600],
    },
    '&:focus': {
      outline: 'none'
    },
  },
}))

export const TransactionHistory = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  const { clearTransactions } = useContext(GlobalContext);

  const displayDiv = transactions.length === 0 ? "none" : "flex";

  const displayButton = transactions.length === 0 ? "none" : "block";

  const clearAll = () => {
    const clear: any = {
      transactions: [],
    };
    clearTransactions(clear);
  };

  return (
    <div>
      <Typography variant="h5" className={classes.history}>
        {transactions.length !== 0 ? "History" : null}
        {transactions.length !== 0 ? <Divider /> : null}
      </Typography>

      <div
        style={{
          display: displayDiv,
          justifyContent: "space-between",
          margin: '2%',
        }}
      >
        <div>
          <Typography className={classes.listCaption} variant="subtitle1">
            Items
          </Typography>
        </div>

        <div>
          <Typography className={classes.listCaption} variant="subtitle1">
            Amount
          </Typography>
        </div>
      </div>

      <ul className="list">
        {transactions.map(transaction => (<Transactions key={transaction.id}
          id={transaction.id}
          description={transaction.description}
          transactionAmount={transaction.transactionAmount}
        />
        ))}

        <Button
          className={classes.clearButton}
          style={{ display: displayButton }}
          onClick={() => clearAll()}
        >
          Clear All Transactions
        </Button>
      </ul>
    </div>
  );
};
