import React from "react";
import "./App.css";
import Paper from '@material-ui/core/Paper';
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { AccountSummary } from "./Components/AccountSummary";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import  {Footer}  from "./Components/Footer";
import firebase from "./Services/firebaseService";

// Import Provider
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  const messaging = firebase.messaging();
  const firebaseMessaging = () => {
    Notification.requestPermission().then((permission:any) => {
      console.log(permission);
      if(permission === 'granted'){
        messaging.getToken().then((currentToken:any) => {
          if (currentToken) {
            console.log("Token:", currentToken);
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');
          }
        }).catch((err:any) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })
  }
  firebaseMessaging();

  return (
    <GlobalProvider>
      <Paper elevation={20}>

        <div className="app">
          <Header />
          <div className="container">
            <Balance />
            <AccountSummary />
            <TransactionHistory />
            <AddTransaction />
          </div>
          <Footer />
        </div>
      </Paper>
    </GlobalProvider>
  );
}

export default App;