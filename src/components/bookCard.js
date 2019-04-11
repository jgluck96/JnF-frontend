import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    console.log(this.props.book)
    return(
    <div>
        <h1>{this.props.book.title}</h1>
    </div>
    )
  }
}
export default BookCard;
