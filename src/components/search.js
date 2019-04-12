import React, { Component } from 'react';
// import { BrowserRouter as NavLink } from "react-router-dom";

class Search extends Component {



  render() {
    return(
      <div style={{float: 'left', width: '190px'}}>
        <input type='text' style={{height: '30px', position: 'absolute', left: '200px', top: '20px'}} onChange={this.props.searchHandler} placeholder="Search"></input>
      </div>
    )
  }
}

export default Search
