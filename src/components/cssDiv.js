import React, { Component } from 'react';

const CssDiv = props => {

  const hover = () => {
    console.log('hi');
  }

  const link = {
    position: 'absolute',
    left: `${Math.random()*1000}px`,
    top: `${Math.random()*700}px`,
    width: `${Math.random()*100}px`,
    height: `${Math.random()*100}px`,

  }


    return(
      <div className='upAndDown'>
      <div className='mini'>
      <div style={link} onMouseOver={() => hover()}>
        <img src={props.img}></img>
      </div>
      </div>
      </div>
    )
}

export default CssDiv
