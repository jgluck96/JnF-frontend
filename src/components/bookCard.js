import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return(
    <div className="bookcontainer">
        <h3>{this.props.book.title}</h3>
        <img src={this.props.book.img_url} className="book"/>
        <h4>{this.props.book.author}</h4>
        <h5>${this.props.book.price}</h5>
    </div>
    )
  }
}
export default BookCard;
