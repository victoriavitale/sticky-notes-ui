import React, {Component} from 'react'; 
import StickyNote from './StickyNote.jsx';

class StickyNotesBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      stickyNotes: [],
      disabled: true
    }
  }

  render() {
    const stickyNotes = this.state.stickyNotes.map((stickyNote) => <StickyNote stickyNote={stickyNote} disabled={this.state.disabled}/>);

    return (
      <div>
        <div className="sticky-notes-container" onDoubleClick={this.addNewNote.bind(this)}>
          <p>Double click anywhere on the board to add a new note</p>
          {stickyNotes}
        </div>
      </div>
    );
  }

  addNewNote(e){
    if(e.target.className == 'sticky-notes-container'){
      var arrNotes = this.state.stickyNotes;
      arrNotes.push({id: 1, title: 'New Note', content: ''})
      this.setState({ stickyNotes: arrNotes})
    }
    this.setState({ disabled: true })
  }

}

export default StickyNotesBoard;