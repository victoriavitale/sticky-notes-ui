import React, {Component} from 'react'; 
import StickyNote from './StickyNote.jsx';

class StickyNotesBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      stickyNotes: [
        {
          id:1,
          title: 'My title 1',
          content:'My content 1'
        },{
          id:2,
          title: 'My title 2',
          content:'My content 2'
        },{
          id:3,
          title: 'My title 3',
          content:'My content 3'
        }
      ],
      disabled: true
    }
  }

  render() {
    const stickyNotes = this.renderNotes();

    return (
      <div>
        <div className="sticky-notes-container" onDoubleClick={this.createNote.bind(this)}>
          <p>Double click anywhere on the board to add a new note</p>
          {stickyNotes}
        </div>
      </div>
    );
  }

  renderNotes(){
    return(
      this.state.stickyNotes.map((stickyNote) => <StickyNote stickyNote={stickyNote} disabled={this.state.disabled} onDuplicateNote={this.duplicateNote.bind(this)}/>)
    )
  }

  createNote(e){
    if(e.target.className == 'sticky-notes-container'){
      this.addNote();
    }
    this.setState({ disabled: true })
  }

  duplicateNote(note){
    this.addNote(note);
  }

  addNote(note){
    var arrNotes = this.state.stickyNotes;
    if(note != undefined){
      arrNotes.push({id: note.id + 1, title: note.title, content: note.content})
    }else{
      arrNotes.push({id: arrNotes.length + 1, title: 'New Note', content: ''})
    }
    this.setState({ stickyNotes: arrNotes })
  }

}

export default StickyNotesBoard;