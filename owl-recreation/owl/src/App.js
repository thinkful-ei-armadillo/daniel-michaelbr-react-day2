import React, {Component} from 'react';
import ParticipantList from './participants';

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
        <div className="chatLog">
        
        </div>
      </div>
    );
  };
}

export default App;