import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Profile from './profile'
import Search from './search'
import SignUp from './signup'
import Cart from './cart'

const NavBar = (props) => {

  const link = {
  width: '100px',
  padding: '17px',
  background: 'white',
  textDecoration: 'none',
  color: 'red',
  }

    return(

      <div style={{padding: '12px', background: 'white'}}>
        <nav className="navbar">
        <Search />
          <div>
            <ul style={{display:'inline-block'}}>
              <li>
                <div>
                  <NavLink style={link} to="/">
                      Home
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink style={link} to="/browse-books/">
                      Browse Books
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink style={link} to="/sign-up/">
                      Sign up
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink style={link} to="/log-in/">
                      Log in
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink style={link} to="/user/:id">
                      Account
                  </NavLink>
                </div>
              </li>
            </ul>
                <Cart cart={props.cart} />
          </div>
        </nav>
      </div>

    )
}

export default NavBar
