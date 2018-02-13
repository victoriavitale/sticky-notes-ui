import React, {Component} from 'react'; 
import StickyNote from './StickyNote.jsx';

class StickyNotesBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
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
    const notes = this.renderNotes();

    return (
      <div>
        <div className="sticky-notes-container" onDoubleClick={this.createNote.bind(this)}>
          <p>Double click anywhere on the board to add a new note</p>
          {notes}
        </div>
      </div>
    );
  }

  renderNotes(){
    return(
      this.state.notes.map((note) => <StickyNote key={note.id} note={note} disabled={this.state.disabled} onDuplicateNote={this.duplicateNote.bind(this)}/>)
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
    console.log(this.state.notes)
  }

  addNote(note){
    var arrNotes = this.state.notes;
    var newID = arrNotes.length + 1;
    if(note == undefined){
      note = {
        title: "New Note",
        content: ''
      }
    }
    arrNotes.push({id: newID, title: note.title, content: note.content})
    this.setState({ notes: arrNotes })
  }

}

export default StickyNotesBoard;