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
    this.setState({
      email: '',
      password: ''
    },  () => this.props.history.push("/"))
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
