import React, { Component } from 'react';
import BookCard from '../components/bookCard';

class BooksContainer extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({books:books}))
  }

  render(){
    return (
      <div className='bookcontainer'>
        {this.state.books.map(bookObj=> {
          return <BookCard key={bookObj.id} addToCart={this.props.addToCart} book={bookObj}/>
        })}
      </div>
    )
  }


}
export default BooksContainer;
