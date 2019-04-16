import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import CheckoutCard from '../components/checkoutCard'
import BillingForm from '../components/billingForm'

class CartContainer extends Component {

  state ={
    renderForm: false
  }

  userValidation = user => {
    if (user.email) {
      this.setState({renderForm: true}, () => console.log(this.state.renderForm))
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
          <div>
          {this.state.renderForm ?
            <BillingForm cart={this.props.cart} clearCart={this.props.clearCart} user={this.props.user}/>
          :
            null
          }
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
