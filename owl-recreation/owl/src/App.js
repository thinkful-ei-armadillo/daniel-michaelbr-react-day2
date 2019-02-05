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
        <header>
          <h1>Owl</h1>
        </header>
        <div className="participantList">
          <ParticipantList
            key={store.participants.id}
            avatar={store.participants.avatar}
            name={store.participants.name}
            onStage={store.participants.onStage}
            />
        </div>
        <div className="stage-container">
          <Stage
          key={store.participants.id}
          avatar={store.participants.avatar}
          name={store.participants.name}
          onStage={store.participants.onStage}
          />
        </div>
        <div className="chatLog-container">
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