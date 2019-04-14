import React, { Component } from 'react';
// import { BrowserRouter as NavLink } from "react-router-dom";
let filteredBooks
class Search extends Component {

  sortHandler = e => {
    switch (e.target.value) {
      case 'Featured':
        this.props.sorting(this.props.books)
        break;
      case 'Price: Low to High':
      // if (this.props.searchTerm) {
      //   const lowHighBooks = this.props.searched.sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, {numeric: true}))
      //   this.props.sorting(lowHighBooks);
      // } else {
        const lowHighBooks = this.props.filtered.sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, {numeric: true}))
        this.props.sorting(lowHighBooks);
      // }
        break;
      case 'Price: High to Low':
      const highLowBooks = this.props.filtered.sort((a,b) => b.price.toString().localeCompare(a.price.toString(), undefined, {numeric: true}))
      this.props.sorting(highLowBooks);
        break;
      // case 'Newly Listed':
      // this.props.sorting(this.props.books.slice(-5));
      //   break;
    }
  }

  render() {
    return(
      <div>
        <input type='text' onChange={this.props.searchHandler} placeholder="Search"></input>
        <div>
          Sort By
          <select onChange={this.sortHandler}>
            <option>Featured</option>
            <option>Most popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newly Listed</option>
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
