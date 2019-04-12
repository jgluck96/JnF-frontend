import React, { Component } from 'react';
import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BooksContainer from './containers/booksContainer'
import Home from './components/home'
import SignUp from './components/signup'
import CartContainer from './containers/cartcontainer'


class App extends Component {

  state = {
    cart: []
  }

  addToCart = book => {
    this.setState(prevState => ({
      cart: [...prevState.cart, book]
    }))
  }


  render() {
    return (
      <div>
        <Header cart={this.state.cart}/>
          <div style={{margin: '60px 0px 0px 0px'}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
              exact path="/browse-books"
              render={() => (
                <BooksContainer addToCart={this.addToCart}/>
              )}
              />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/log-in" component={BooksContainer} />
              <Route
              exact path="/cart"
              render={() => (
                <CartContainer cart={this.state.cart}/>
              )}
              />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
