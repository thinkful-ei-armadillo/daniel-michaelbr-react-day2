import React from 'react';
import STORE from './store';

function ParticipantList(props){
    let staged = [];
    let online = [];
    for(let i = 0; i < STORE.participants.length; i++){
        if(STORE.participants.inSession && STORE.participants[i].onStage){
            staged.push(STORE.participants[i])
        }
        else if(STORE.participants[i].inSession){
            online.push(STORE.participants[i])
        }
    }
    return(
        <div className="list">
            <p>{staged.map(staged => staged.avatar)}</p>
            <p>{staged.map(staged => staged.name)}</p>
            <p>{staged.map(staged => 'on stage')}</p>
        </div>
    );
}

export default ParticipantList;