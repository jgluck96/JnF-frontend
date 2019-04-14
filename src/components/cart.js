import React, { Component } from 'react'
import { BrowserRouter as NavLink } from "react-router-dom";
// import Checkout from './checkout'

class Cart extends Component {

  render() {
    return(
      <div className="cartDiv">
        <button className="Cartbtn"><i className="fa fa-shopping-cart icon"></i></button>
        <span>{this.props.cart.length}</span>
      </div>
    )
  }
}

export default Cart
