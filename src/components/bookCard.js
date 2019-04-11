import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return(
    <div className="bookcard">
        <img className="bookimage" src={this.props.book.img_url}/>
        <h3 className="booktitle">{this.props.book.title}</h3>
        <h4>{this.props.book.author}</h4>
        <h5>${this.props.book.price}</h5>
        <button className="buybutton">Buy</button>
    </div>
    )
  }
}
export default BookCard;
