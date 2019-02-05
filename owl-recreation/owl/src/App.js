import React, {Component} from 'react';
import ParticipantList from './participants';
import Stage from './stage';
import Chat from './chat';

class App extends Component{
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  };

  render(){
    const {store} = this.props;
    return (
      <div className="container">
        <div className="participantList">
          <h2>Participants</h2>
          <ParticipantList
            key={store.participants.id}
            avatar={store.participants.avatar}
            name={store.participants.name}
            onStage={store.participants.onStage}
            />
        </div>
        <div className="stage-container">
          <h2>Stage</h2>
          <Stage
          key={store.participants.id}
          avatar={store.participants.avatar}
          name={store.participants.name}
          onStage={store.participants.onStage}
          />
        </div>
        <div className="chatLog-container">
          <h2>Chat</h2>
          <Chat
          key={store.chatEvents.participantId}
          type={store.chatEvents.type}
          message={store.chatEvents.message}
          time={store.chatEvents.time}
          timestamp={store.chatEvents.timestamp}
          />
        </div>
      </div>
    );
  };
}

export default App;