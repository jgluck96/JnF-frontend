import React from 'react'
import { withRouter } from "react-router-dom";


 class BookShow extends React.Component {

   back = (e) => {
     e.preventDefault()
     this.props.history.push("/browse-books")
   }

  render(){
    return (
      <div>
      <div>
        <button id='backBtnCont' onClick={this.back}>
        Back
        </button>
      </div>
      <div className='showbox'>
        <img className='imgg' src={this.props.bookShow.img_url}/>
          <div  className='bookShow'>
          <h1>{this.props.bookShow.title}</h1>
          <h2>By: {this.props.bookShow.author}</h2>
          <h4>Genre: {this.props.bookShow.genre}</h4>
          <p>Synopsis:<br/><br/>{this.props.bookShow.synopsis}</p>
          <h5>${this.props.bookShow.price}</h5>
          <button onClick={() => this.props.addToCart(this.props.bookShow)} className="buybutton">Add To Cart</button>
          </div>
        </div>
      </div>

    )
  }
}

 export default withRouter(BookShow)
