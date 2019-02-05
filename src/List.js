import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import './List.css';

function List(props){
  console.log(props);
  return(
    <main >
      <header>
      {props.header}
      </header>

      <div>
        {props.card.map(card =>
          <Card key={card.id} title={card.title} content={card.content} />
          )}
      </div>
    </main>
  );
}


export default List;
