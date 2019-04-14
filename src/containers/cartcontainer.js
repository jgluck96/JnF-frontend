import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import CheckoutCard from '../components/checkoutCard'

class CartContainer extends Component {

  userValidation = user => {
    if (user.name) {
      this.props.history.push("/checkout")
    } else {
      this.props.history.push("/sign-up")
    }
  }

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
          <div>
            <p>Subtotal: ${Number(this.props.cart.reduce((acc, {price}) => acc + price, 0).toFixed(2))}</p>
            <p>Tax: 4%</p>
            <p>Total: ${Number((Number(this.props.cart.reduce((acc, {price}) => acc + price, 0).toFixed(2))*0.04) + Number(this.props.cart.reduce((acc, {price}) => acc + price, 0).toFixed(2))).toFixed(2)}</p>
            <button onClick={() => this.userValidation(this.props.user)}>Checkout</button>
          </div>
        </div>
        :
        <h2>You have no items in your cart</h2>
      }
      </div>
      </div>
    )
  }
}

export default withRouter(CartContainer)
