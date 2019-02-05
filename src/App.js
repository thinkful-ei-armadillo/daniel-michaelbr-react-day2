import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
// import STORE from './store';

// function App(store){ 
//   console.log(store);

//   return(
//     <main>
//       <header>
//         <h1>Trello</h1>
//       </header>
//       <div className='App-list'>
//          {store.lists.map(card =>(
//            <List
//               key = {card.id}
//               header = {card.header}
//               card = {card.cardIds.map(id => store.allCards[id])}
//            />
//         ) )} 
//       </div>
//     </main>
//   );

// }


class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const {store} = this.props;
      return(
    <main>
      <header>
        <h1>Trello</h1>
      </header>
      <div className='App-list'>
         {store.lists.map(list =>(
           <List
              key = {list.id}
              header = {list.header}
              card = {list.cardIds.map(id => store.allCards[id])}
           />
        ) )} 
      </div>
    </main>
  );
  }
}

export default App;