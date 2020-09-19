import React, { useContext } from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import CountUp from "react-countup";

// import the Global State
import { GlobalContext } from "../Context/GlobalState";


const useStyles = makeStyles((theme) => ({
  balance:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  balanceAmount:{
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2%',
  }
}))

export const Balance = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const balance = +transactionAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <Typography variant="h5" className={classes.balance}>Your Balance</Typography>
      <Divider/>
      <Typography variant="h4" className={classes.balanceAmount}>Rs. {''}
      <CountUp
          start={0}
          end={balance}
          duration={1.5}
          separator=","
        />
      </Typography>
    </div>
  );
};