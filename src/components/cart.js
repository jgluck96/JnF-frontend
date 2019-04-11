import React, { Component } from 'react'
import { BrowserRouter as NavLink } from "react-router-dom";

class Cart extends Component {
  render() {
    return(
      <div style={{float: 'left', width: '190px'}}>
        <NavLink>
          <i src="https://banner2.kisspng.com/20171217/01f/shopping-cart-png-5a364b6d3217e8.4884266315135076932052.jpg"></i>
        </NavLink>
      </div>
    )
  }
}

export default Cart
