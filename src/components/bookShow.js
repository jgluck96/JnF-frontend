import React from 'react'


 class BookShow extends React.Component {
  render(){
    return (
      <div className='showbox'>
        <img src={this.props.bookShow.img_url}/>
        <div  className='bookShow'>
        <h1>{this.props.bookShow.title}</h1>
        <h2>By: {this.props.bookShow.author}</h2>
        <h4>Genre: {this.props.bookShow.genre}</h4>
        <p>Synopsis:<br/><br/>{this.props.bookShow.synopsis}</p>
        <h5>${this.props.bookShow.price}</h5>
        <button onClick={() => this.props.addToCart(this.props.bookShow)} className="buybutton">Add To Cart</button>
        </div>
      </div>
    )
  }
}

 export default BookShow
