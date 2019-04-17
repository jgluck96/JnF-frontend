import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Search from './search'
import SignUp from './signup'
import Cart from './cart'

const NavBar = (props) => {

    return(

      <div style={{padding: '12px'}}>
        <nav className="navbar">
          <div>
            <ul style={{display:'inline-block'}}>
              <li>
                <div>
                  <NavLink className="navLink" to="/">
                      Home
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink className="navLink" to="/browse-books/">
                      Browse Books
                  </NavLink>
                </div>
              </li>
              {!props.user ?
              (<div style={{float: 'right'}}>
                <li>
                  <div>
                    <NavLink className="navLink" to="/sign-up/">
                        Sign up
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div>
                    <NavLink className="navLink" to="/log-in/">
                        Log in
                    </NavLink>
                  </div>
                </li>
              </div>)
              :
              (<div style={{float: 'right'}}>
                <li>
                  <div>
                    <NavLink className="navLink" to="/account">
                        Account
                    </NavLink>
                  </div>
                </li>
                <li onClick={props.logout}>
                  <div>
                    <NavLink className="navLink" to="/">
                        Logout
                    </NavLink>
                  </div>
                </li>
              </div>)
              }
            </ul>
              <NavLink to='/cart'>
                <Cart cart={props.cart} />
              </NavLink>
          </div>
        </nav>
      </div>

    )
}

export default NavBar
