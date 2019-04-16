import React, { Component } from 'react';

class BookCard extends Component {

  render() {
    return(
    <div className="bookcard">
        <img className="bookimage" onClick={() => this.props.bookHandler(this.props.book)} alt='' src={this.props.book.img_url}/>
        <h4 className="booktitle">{this.props.book.title.length > 50 ? (this.props.book.title.slice(0, 45) + "...") : this.props.book.title}</h4>
        <h4 className="bookauthor">{this.props.book.author}</h4>
        <h5 className="bookprice">${this.props.book.price}</h5>
        <button onClick={() => this.props.addToCart(this.props.book)} className="buybutton">Add To Cart</button>
    </div>
    )
  }
}
export default BookCard;
