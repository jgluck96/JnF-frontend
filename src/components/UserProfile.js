import React, { Component } from 'react';
import BookFloat from './cssDiv'

const UserProfile = props => {

  class Circ {
  	constructor(l, t, w, h) {
  		this.l = l;
  		this.t = t;
  		this.w = w;
  		this.h = h;
  		this.finall = 0;
  		this.finalt = 0;
  	}
}

// {props.cart.length > 0 ?
  //
  //   <div id='circleHolder'>
  //   {props.cart.map(bookObj => {
    //     return <BookFloat img={bookObj.img_url} />
    //   })}
    // </div>
    // :
    // <h3>Go Buy Books and Be Smart</h3>
    // }
    return(
      <div className="userShow">
      <div>
      <h1>Books You Want</h1>
      <h2>{props.user.name}</h2>
      <h3>{props.user.email}</h3>
      <h4>{props.user.address}</h4>
      </div>
      </div>
    )
}

export default UserProfile
