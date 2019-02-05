import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';
import './List.js';

function Card(props){

  return(
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}



export default Card;
