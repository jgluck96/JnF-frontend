import React, { Component } from 'react';
import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import BooksContainer from './containers/booksContainer'
import Home from './components/home'
import SignUp from './components/signup'
import Checkout from './components/checkout'
import Login from './components/login'
import CartContainer from './containers/cartcontainer'


class App extends Component {

  state = {
    user: {},
    cart: []
  }

  // componentDidMount() {
  //   let token = localStorage.getItem("token")
  //   console.log("app did mount", token)
  //   fetch('http://localhost:3000/users', {
  //     method: 'GET',
  //     header: {
  //       'content-type':'applicatin/json',
  //       accept: 'applicatin/json',
  //       authorization: `${token}`
  //     }
  //   })
  // }

  createUser = userInfo => {
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: {name: userInfo.name, address: userInfo.address, email: userInfo.email, password: userInfo.password}
      })
    }).then(resp => resp.json())
      .then(user => this.setState({user: user}))
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
              <Route exact path="/sign-up" render={() => <SignUp submitHandler={this.createUser}/>}/>
              <Route exact path="/log-in" component={Login} />
              <Route
              exact path="/cart"
              render={() => (
                <CartContainer
                user={this.state.user}
                cart={this.state.cart}/>
              )}
              />
              <Route
              exact path="/account"
              render={() => (
                <CartContainer
                user={this.state.user}
                cart={this.state.cart}/>
              )}
              />
              <Route
              exact path="/checkout"
              render={() => (
                <Checkout
                cart={this.state.cart}/>
              )}
              />
            </Switch>
          </div>
      </div>
    );
  }
}

export default withRouter(App);




// <Route exact path="/books/:id"
// render={routerProps => {
//   let id = parseInt(routerProps.match.params.id)
//   let book = this.state.books.find(
//     bookObj => bookObj.id === id
//   )
//   return <BookProfile book={book} />
// }}
// />
