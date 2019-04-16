import React, { Component } from 'react';
// import { BrowserRouter as NavLink } from "react-router-dom";
let filteredBooks
class Search extends Component {

  sortHandler = e => {
    switch (e.target.value) {
      case 'Price: Low to High':
        const lowHighBooks = this.props.filtered.sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, {numeric: true}))
        this.props.sorting(lowHighBooks);
        break;
      case 'Price: High to Low':
      const highLowBooks = this.props.filtered.sort((a,b) => b.price.toString().localeCompare(a.price.toString(), undefined, {numeric: true}))
      this.props.sorting(highLowBooks);
        break;
      case 'Alphabetical: (A-Z)':
      const alphaBooks = this.props.filtered.sort((a,b) => a.title.localeCompare(b.title))
      this.props.sorting(alphaBooks)
        break;
    }
  }

  render() {
    return(
      <div>
        <input type='text' onChange={this.props.searchHandler} placeholder="Search"></input>
        <div>
          Sort By
          <select onChange={this.sortHandler}>
            <option>Alphabetical: (A-Z)</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Search
// <div style={{float: 'left', width: '190px'}}>
//   <input type='text' style={{height: '30px', position: 'absolute', left: '200px', top: '20px'}} onChange={this.props.searchHandler} placeholder="Search"></input>
// </div>
