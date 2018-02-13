import React, {Component} from 'react';
import Header from './components/Header.jsx';
import StickyNotesBoard from './components/StickyNotesBoard.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <StickyNotesBoard/>
      </div>
    );
  }
}
export default App;
