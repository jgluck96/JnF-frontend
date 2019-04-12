import React, { Component } from 'react'
import { BrowserRouter as NavLink } from "react-router-dom";
import CheckoutCard from '../components/checkoutCard'

class Cart extends Component {
  render() {
    const books = this.props.cart.map(bookObj=> {
      return <CheckoutCard key={bookObj.id} book={bookObj}/>
    })
    return(
      <div>
      <div className='bookcontainer'>
      <h1>Cart</h1>
      {this.props.cart.length > 0 ?
        <div>
          {this.props.cart.map(bookObj=> {
            return <CheckoutCard key={bookObj.id} book={bookObj}/>
          })}
          <button>Checkout</button>
        </div>
        :
        <h2>You have no items in your cart</h2>
      }
      </div>
      </div>
    )
  }
}

export default Cart
