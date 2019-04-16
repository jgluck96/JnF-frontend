import React, { Component } from 'react';

class BookCard extends Component {

  render() {
    return(
    <div className="bookcard">
        <img className="bookimage" onClick={() => this.props.bookHandler(this.props.book)} alt='' src={this.props.book.img_url}/>
        <h3 className="booktitle">{this.props.book.title}</h3>
        <h4>{this.props.book.author}</h4>
        <h5>${this.props.book.price}</h5>
        <button onClick={() => this.props.addToCart(this.props.book)} className="buybutton">Add To Cart</button>
    </div>
    )
  }
}
export default BookCard;
