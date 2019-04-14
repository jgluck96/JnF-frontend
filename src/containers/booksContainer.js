import React, { Component } from 'react';
import BookCard from '../components/bookCard';
import Search from '../components/search';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";


class BooksContainer extends Component {

  state = {
    books: [],
    filtered: [],
    searched: [],
    newlyListed: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books:books, filtered: books}))
  }

  searchHandler = (search) => {
    const searched = this.state.books.filter(book => book.title.toLowerCase().includes(search.target.value.toLowerCase()) || book.author.toLowerCase().includes(search.target.value.toLowerCase()))
    this.setState({searchTerm: search.target.value, searched: searched})
  }

  sort = sorted => {
    // if (sorted.length === 5) {
    //   this.setState({newListed: sorted})
    // } else {
    console.log(sorted);
      this.setState({filtered: sorted})
    // }
  }

  render(){
    // console.log(this.state.filtered);
    let searched = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || book.author.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (

      <div className='bookcontainer'>
      <Search searchHandler={this.searchHandler} searched={this.state.searched} searchTerm={this.state.searchTerm} sorting={this.sort} books={this.state.books} filtered={this.state.filtered}/>
        {this.state.searchTerm ?
          (searched.map(bookObj => {
            return <BookCard key={bookObj.id} addToCart={this.props.addToCart} book={bookObj}/>
          }))
          : (this.state.filtered.map(bookObj=> {
          return <BookCard key={bookObj.id} addToCart={this.props.addToCart} book={bookObj}/>
        }))}

      </div>
    )
  }

}
export default BooksContainer;
