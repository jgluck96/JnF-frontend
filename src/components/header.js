import React from 'react'
import NavBar from './NavBar'

const Header = (props) => {
  return(
    <NavBar cart={props.cart}/>
  )
}
export default Header
