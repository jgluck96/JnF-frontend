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
import BookShow from './components/bookShow'
import UserProfile from './components/UserProfile'


class App extends Component {

  state = {
    user: '',
    cart: [],
    bookShow: '',
    books: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books:books}))
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books:books}))
    .then(() => {
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
    })
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

  bookShow = (book) => {
    console.log(book);
    this.setState({bookShow: book})
  }

  addToCart = book => {
    this.setState(prevState => ({
      cart: [...prevState.cart, book]
    }))
  }

  loginUser = user => {
    console.log(user);
    this.setState({user: user})
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
              <Route exact path="/" render={() => <Home bookShow={this.bookShow} books={this.state.books}/>} />
              <Route
              exact path="/browse-books"
              render={() => (
                <BooksContainer bookShow={this.bookShow} addToCart={this.addToCart}/>
              )}
              />
              <Route
              exact path="/books/:id"
              render={() => (
                <BookShow bookShow={this.state.bookShow} addToCart={this.addToCart}/>
              )}/>
              <Route exact path="/sign-up" render={() => <SignUp submitHandler={this.createUser}/>}/>
              <Route exact path="/log-in" render={() => <Login loginUser={this.loginUser}/>} />
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
                <UserProfile
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
