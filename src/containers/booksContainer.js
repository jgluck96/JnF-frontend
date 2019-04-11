import React, { Component } from 'react';
import BookCard from '../components/bookCard';

class BooksContainer extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  render(){
    let allBooks = this.state.books.map(book => <BookCard book={book}/>)
    return (
      <div className='bookcontainer'>
      {allBooks}
      </div>
    )
  }


}
export default BooksContainer;
