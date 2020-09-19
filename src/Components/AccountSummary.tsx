import React, { useContext } from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import CountUp from "react-countup";

// import the Global State
import { GlobalContext } from "../Context/GlobalState";

const useStyles = makeStyles((theme) => ({
  TransactionDetail: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  IncomeAmount: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: '18px',
  },
  ExpenseAmount: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: '18px'
  },
}))

export const AccountSummary = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = +transactionAmounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

  const expense = +Math.abs(
    transactionAmounts
      .filter((transactions) => transactions < 0)
      .reduce((acc, transaction) => (acc += transaction), 0)
  ).toFixed(2);

  return (
    <Paper elevation={3}>

      <div className="account_summary">
        <div className="line-break">
          <Typography variant='h6' className={classes.TransactionDetail}>INCOME</Typography>
          <Typography variant='subtitle1' className={classes.IncomeAmount}>
            Rs.
          <CountUp
              start={0}
              end={income}
              duration={1.5}
              separator=","
            />
          </Typography>
        </div>

        <div>
          <Typography variant="h6" className={classes.TransactionDetail}>EXPENSE</Typography>
          <Typography variant='subtitle1' className={classes.ExpenseAmount}>
            Rs.
          <CountUp
              start={0}
              end={expense}
              duration={1.5}
              separator=","
            />
          </Typography>
        </div>
      </div>
    </Paper>
  );
};