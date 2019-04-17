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


    return(
      <div >
      <div>
      <h1 className="userShow">Books You Want</h1>
      {props.cart.length > 0 ?

          <div id='circleHolder'>
          {props.cart.map(bookObj => {
              return <BookFloat img={bookObj.img_url} />
            })}
          </div>
          :
          null
          }
      </div>
      </div>
    )
}

export default UserProfile
