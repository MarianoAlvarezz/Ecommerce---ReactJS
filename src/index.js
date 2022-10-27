import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCyvs5kaCcHFxvvp7owFpvENiUqQRCVQbA",
  authDomain: "ecommerce-reactjs-ac5ae.firebaseapp.com",
  projectId: "ecommerce-reactjs-ac5ae",
  storageBucket: "ecommerce-reactjs-ac5ae.appspot.com",
  messagingSenderId: "234758498617",
  appId: "1:234758498617:web:50be1fadf25e2e7a14a0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
