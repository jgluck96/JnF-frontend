import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class SignUp extends Component {

  state = {
    name: '',
    address: '',
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
    this.props.submitHandler(this.state)
    this.setState({
      name: '',
      address: '',
      email: '',
      password: ''
    }, () => this.props.history.push("/"))
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Name: <input onChange={this.changeHandler} placeholder="Name.." value={this.state.name} name="name"></input></label>
          <label>Address: <input type="text" onChange={this.changeHandler} placeholder="address.." value={this.state.address} name="address"/></label>
          <label>Email: <input type="text" onChange={this.changeHandler} value={this.state.email} placeholder="email.." name="email"/></label>
          <label htmlFor="password">Password: <input type="password" onChange={this.changeHandler} value={this.state.password} placeholder="password.." name="password"/></label>
          <input type="submit" value="Sign up"/>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
