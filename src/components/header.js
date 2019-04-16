import React from 'react'
import NavBar from './NavBar'

const Header = (props) => {
  return(
    <NavBar cart={props.cart} logout={props.logout} user={props.user}/>
  )
}
export default Header
