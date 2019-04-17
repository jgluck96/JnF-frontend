import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


const CssDiv = props => {

  const hover = e => {
    e.persist()
    // console.log(e);
    // if (e.target !== '<button>hi</button>') {
    //   e.target.outerHTML = '<button>hi</button>'
    //
    // }
  }

  const link = {
    position: 'absolute',
    left: `${Math.random()*1000}px`,
    top: `${Math.random()*700}px`,
    width: `${Math.random()*100}px`,
    height: `${Math.random()*100}px`
  }


    return(
      <div className='upAndDown'>
      <div className='mini'>
      <div style={link} onMouseOver={() => props.history.push("/cart")}>
        <img src={props.img}></img>
      </div>
      </div>
      </div>
    )
}

export default withRouter(CssDiv)
