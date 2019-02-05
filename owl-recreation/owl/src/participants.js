import React from 'react';
import STORE from './store';
import './participants.css';

function ParticipantList(props){
    let staged = [];
    let online = [];
    for(let i = 0; i < STORE.participants.length; i++){
        if(STORE.participants[i].onStage){
            staged.push(STORE.participants[i])
        }
        else if(STORE.participants[i].inSession){
            online.push(STORE.participants[i])
        }
    }
    console.log(staged);
    console.log(online);

    return(
        <div className="list">
            <ul>{staged.map(staged => <li><img src={staged.avatar} alt="avatar"/><br/>{staged.name} | on stage</li>)}</ul>
            <ul>{online.map(online => <li><img src={online.avatar} alt="avatar"/><br/>{online.name} | in session</li>)}</ul>
        </div>
    );
}

export default ParticipantList;