import React from 'react';
import STORE from './store';
import './stage.css';

function Stage(props){
  let staged = [];

  for(let i = 0; i < STORE.participants.length; i++){
    if(STORE.participants[i].onStage){
        staged.push(STORE.participants[i])
    }
  }
  console.log(staged);

  return (
    <div className="stage">
      {staged.map(staged => <p><img src={staged.avatar} alt="avatar"/><br/>{staged.name}</p>)}
    </div>
  );
  }

  export default Stage;