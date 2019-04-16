import React, {Component} from 'react'
import { withRouter } from "react-router-dom";


class BillingForm extends Component {

  submitPurchase = books => {
    const ids = books.map(bookObj => {
      return bookObj.id
    })

    fetch('http://localhost:3000/sales', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        book_id: ids

      })
    }).then(this.props.clearCart)
      .then(this.props.history.push("/thank-you"))
  }

  render(){
    return(
      <div>
        <div>
          <label>Shipping Details</label>
            <label>Name: <input></input></label>
            <label>Address: <input></input></label>
            <label>Apt. <input></input></label>
            <label>Zipcode:<input></input></label>
        </div>
        <div>
          <label>Billing Details</label>
            <select>
              <option>Visa</option>
              <option>Mastercard</option>
              <option>Amex</option>
              <option>Discover</option>
            </select>
            <label>Card Number: <input></input></label>
            <label>Expiration: <input placeholder="xx/xx"></input></label>
            <label>Pin: <input placeholder="pin"></input></label>
        </div>
        <button onClick={() => this.submitPurchase(this.props.cart)}>Buy Book</button>
      </div>
    )
  }

}

export default withRouter(BillingForm)
