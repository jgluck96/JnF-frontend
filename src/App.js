import React, { Component } from 'react';
import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BooksContainer from './containers/booksContainer'

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
