import React, {Component} from 'react'; 
import StickyNote from './StickyNote.jsx';

class StickyNotesBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: []
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
        onDuplicateNote={this.duplicateNote.bind(this)}
        onNoteSelect={this.updateNotesSelection.bind(this)}
      />)
    )
  }

  createNote(e){
    var newNote = { title: '', content: '' }
    if(e.target.className == 'sticky-notes-container'){
      this.addNote(newNote);
    }
  }

  duplicateNote(note){
    this.addNote(note);
  }

  addNote(note){
    var newNotesList = this.state.notes;
    var newID = newNotesList.length + 1;
    newNotesList.push({ id: newID, title: note.title, content: note.content })
    this.setState({ notes: newNotesList })
  }

  updateNotesSelection(selectedNote, isShiftPressed){
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
      this.setState({ notes: this.state.notes })
  }

}

export default StickyNotesBoard;