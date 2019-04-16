import React from 'react'


 class BookShow extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.bookShow.title}</h1>
        <img src={this.props.bookShow.img_url}/>
        <h2>By: {this.props.bookShow.author}</h2>
        <h4>Genre: {this.props.bookShow.genre}</h4>
        <p>Synopsis:<br/><br/>{this.props.bookShow.synopsis}</p>
        <h5>${this.props.bookShow.price}</h5>
        <button onClick={() => this.props.addToCart(this.props.bookShow)} className="buybutton">Add To Cart</button>
      </div>
    )
  }
}

 export default BookShow
