import React, { Component } from 'react';
import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BooksContainer from './containers/booksContainer'
import Checkout from './components/checkout'
import Home from './components/checkout'
import SignUp from './components/signup'


class App extends Component {

  state = {
    cart: []
  }

  addToCart = book => {
    this.setState(prevState => ({
      cart: [...prevState.cart, book]
    }))
  }

  // cart = () => {
  //   return this.state.cart
  // }

  render() {
    return (
      <Router>
      <div>
        <Header cart={this.state.cart}/>
          <div style={{margin: '60px 0px 0px 0px'}}>
            <Switch>
              <Route
                path="/browse-books/"
                render={() => (
                  <BooksContainer addToCart={this.addToCart}/>
                )}
              />
              <Route path="/" component={Home} />
              <Route path="/sign-up/" component={SignUp} />
              <Route path="/browse-books/" component={BooksContainer} />
            </Switch>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

// <Checkout cart={this.state.cart}/>
