import React, { Component } from 'react';
import BookCard from '../components/bookCard';
import Search from '../components/search';

class BooksContainer extends Component {

  state = {
    books: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books:books}))
  }

  searchHandler = (search) => {
    this.setState({searchTerm: search.target.value})
  }

  render(){
    let searched = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <div className='bookcontainer'>
      <Search searchHandler={this.searchHandler}/>
        {this.state.searchTerm ?
          (searched.map(bookObj => {
            return <BookCard key={bookObj.id} addToCart={this.props.addToCart} book={bookObj}/>
          }))
          : (this.state.books.map(bookObj=> {
          return <BookCard key={bookObj.id} addToCart={this.props.addToCart} book={bookObj}/>
        }))}
      </div>
    )
  }


}
export default BooksContainer;
