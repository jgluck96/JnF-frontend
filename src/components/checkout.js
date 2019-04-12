import React, { Component } from 'react'
import { BrowserRouter as NavLink } from "react-router-dom";
import CheckoutCard from './checkoutCard'

class Cart extends Component {
  render() {
    console.log("checkout props", this.props.cart);
    return(
      <div>
      <h1>Cart</h1>
      </div>
    )
  }
}

export default Cart
// <div className='bookcontainer'>
//   {this.props.cart.map(bookObj=> {
  //     return <CheckoutCard book={bookObj}/>
  //   })}
  // </div>
