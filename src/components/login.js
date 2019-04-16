import React, { Component } from 'react'
import { withRouter } from "react-router-dom";


class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const email = this.state.email
    const pass = this.state.password

    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => {
        const foundUser = users.find(userObj => userObj.email === email)
        if (foundUser && foundUser.password === pass) {
          console.log('logged in ');
          this.props.loginUser(foundUser)
        } else {
          this.props.history.push("/sign-up")
        }
      })
    this.setState({
      email: '',
      password: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Email: <input type="text" onChange={this.changeHandler} value={this.state.email} placeholder="email.." name="email"/></label>
          <label htmlFor="password">Password: <input type="password" onChange={this.changeHandler} value={this.state.password} placeholder="password.." name="password"/></label>
          <input type="submit" value="Log in"/>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
