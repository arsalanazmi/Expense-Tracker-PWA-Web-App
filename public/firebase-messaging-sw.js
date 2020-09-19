importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAkVfvlIhVR5VnqgDH_dsNaOjcr5bnOjOo",
  authDomain: "expense-tracker-app-bb713.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-bb713.firebaseio.com",
  projectId: "expense-tracker-app-bb713",
  storageBucket: "expense-tracker-app-bb713.appspot.com",
  messagingSenderId: "371680110657",
  appId: "1:371680110657:web:a86186ad7ca67b53c0bec0",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();