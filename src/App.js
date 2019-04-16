import React, { Component } from 'react';
import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import BooksContainer from './containers/booksContainer'
import Home from './components/home'
import SignUp from './components/signup'
import Checkout from './components/checkout'
import Login from './components/login'
import ThankYou from './components/thankYou'
import CartContainer from './containers/cartcontainer'


class App extends Component {

  state = {
    user: '',
    cart: []
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    token ?
      fetch('http://localhost:3000/get_user', {
        method: 'GET',
        headers: {
          'content-type':'application/json',
          accepts: 'application/json',
          authorization: `${token}`
        }
      }).then(resp => resp.json())
        .then(user => this.setState({user: user}))
    :
    this.setState({user: ''})
  }

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
      .then(user => {
        this.setState({user: user})
        localStorage.setItem("token", user.token)
      })
  }

  addToCart = book => {
    this.setState(prevState => ({
      cart: [...prevState.cart, book]
    }))
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({user: ''}, () => this.props.history.push("/"))
  }

  clearCart = () => {
    this.setState({cart: []})
  }

  render() {
    return (
      <div>
        <Header logout={this.logout} user={this.state.user} cart={this.state.cart}/>
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
              <Route exact path="/thank-you" component={ThankYou} />
              <Route
              exact path="/cart"
              render={() => (
                <CartContainer
                clearCart={this.clearCart}
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
