import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/signup'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import BooksContainer from './containers/booksContainer'
import Home from './components/checkout'
import Checkout from './components/home'

ReactDOM.render(
  <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// <Route path="/checkout" component={Checkout} />
