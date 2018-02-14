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
          content:'My content 1',
          selected: false
        },{
          id:2,
          title: 'My title 2',
          content:'My content 2',
          selected: false
        },{
          id:3,
          title: 'My title 3',
          content:'My content 3',
          selected: false
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
      this.state.notes.map((note) => 
      <StickyNote 
        key={note.id} 
        note={note} 
        disabled={this.state.disabled} 
        onDuplicateNote={this.duplicateNote.bind(this)}
        onNoteSelect={this.toggleNotesSelection.bind(this)}
      />)
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
    var newNotesList = this.state.notes;
    var newID = newNotesList.length + 1;
    if(note == undefined){
      note = {
        title: "New Note",
        content: ''
      }
    }
    newNotesList.push({id: newID, title: note.title, content: note.content})
    this.setState({ notes: newNotesList })
  }

  toggleNotesSelection(selectedNote, isShiftPressed){
    if(!isShiftPressed){
      this.clearNotesSelection(selectedNote);
    }else{
      var noteIndex = this.state.notes.indexOf(selectedNote);
      this.state.notes[noteIndex].selected = selectedNote.selected;
    }
  }

  clearNotesSelection(selectedNote){
    this.state.notes.map((note) => {
        if (note != selectedNote) {
          note.selected = false
        }
      })
      this.setState({notes: this.state.notes})
  }

}

export default StickyNotesBoard;