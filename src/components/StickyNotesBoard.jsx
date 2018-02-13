import React, {Component} from 'react'; 
import StickyNote from './StickyNote.jsx';

class StickyNotesBoard extends Component {
  render() {
    return (
      <div>
        <div className="sticky-notes-container">
            <StickyNote/>
        </div>
      </div>
    );
  }
}

export default StickyNotesBoard;