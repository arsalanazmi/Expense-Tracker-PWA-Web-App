import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { makeStyles, Button, TextField, Typography, Divider } from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

// Import Global State
import { GlobalContext } from "../Context/GlobalState";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    margin: '0 0 5% 0',
  },
  formField: {

    margin: '8px 0',
  },
  description: {
    width: '100%',
  },
  label: {
    fontWeight:'bold',
    '&$focused': {
      color: '#062268',
    },
  },
  focused: {},
  incomeButton: {
    width: '49%',
    margin: '1% 1% 0 0',
    backgroundColor: green[800],
    color: 'white',
    '&:hover': {
      backgroundColor: green[600],
    },
    '&:focus': {
      outline: 'none'
    },
  },
  expenseButton: {
    width: '49%',
    margin: '1% 0 0 1%',
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

export const AddTransaction = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0)
  const { addIncome } = useContext(GlobalContext);
  const { addExpense } = useContext(GlobalContext);

  const handleIncome = () => {
    // If any field is empty do not submit the Form.
    if (
      description === '' || transactionAmount === 0
    ) {
      return;
    }
    const newTransaction = {
      id: uuidv4(),
      description,
      transactionAmount: +transactionAmount, //converting string into number
    };
    addIncome(newTransaction);
    setDescription("");
    setTransactionAmount(0)
  };
  const handleExpense = () => {
    // If any field is empty do not submit the Form.
    if (
      description === '' || transactionAmount === 0
    ) {
      return;
    }
    const newTransaction = {
      id: uuidv4(),
      description,
      transactionAmount: -(+transactionAmount), //converting string into number
    };
    addExpense(newTransaction);
    setDescription("");
    setTransactionAmount(0)
  };

  return (
    <div>
      <Typography variant="h5" className={classes.heading} gutterBottom>Add New Transaction</Typography>
      <Divider className={classes.divider} />
      <form noValidate autoComplete="off">
        <div className={classes.formField}>
          <TextField
            required
            type="text"
            id="filled-required"
            label="Transaction Description"
            variant="filled"
            className={classes.description}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focused,
              },
            }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className={classes.formField}>
          <TextField
            required
            id="filled-required"
            type="number"
            label="Transaction Amount"
            variant="filled"
            className={classes.description}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focused,
              },
            }}
            value={transactionAmount}
            onChange={(e) => {
              setTransactionAmount(Number(e.target.value));
            }}
          />
        </div>

        <Button variant="contained" onClick={handleIncome} className={classes.incomeButton}>
          Add Income
        </Button>

        <Button variant="contained" onClick={handleExpense} className={classes.expenseButton}>
          Add Expense
        </Button>
      </form>
    </div>
  );
};