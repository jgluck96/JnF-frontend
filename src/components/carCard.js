import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class CarCard extends Component {

  clickCardCar = () => {
    this.props.bookShow(this.props.book)
    this.props.history.push(`/books/${this.props.book.id}`)
  }

  render() {
    return(
    <div className="carcard" onClick={this.clickCardCar}>
        <img className="carimage" src={this.props.book.img_url}/>
        <div className="cartitle">
        <h4>{this.props.book.title.length < 15 ? this.props.book.title:this.props.book.title.slice(0,15).toString()+'...'}</h4>
        </div>
        <h5 id='author'>{this.props.book.author}</h5>
        <h5>${this.props.book.price}</h5>
    </div>
    )
  }
}
export default withRouter(CarCard)
