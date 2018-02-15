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
        <div className="sticky-notes-container" onDoubleClick={this.addNewNote.bind(this)}>
          <p>Double click anywhere on the board to add a new note</p>
          {notes}
        </div>
      </div>
    );
  }

  //Render each item in notes list as a Sticky Note
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

  //Adding new and duplicated notes
  addNewNote(e){
    const newNote = { title: '', content: '' }
    if(e.target.className == 'sticky-notes-container'){
      this.addNote(newNote);
    }
  }

  duplicateNote(noteToDuplicate){
    this.addNote(noteToDuplicate);
  }

  addNote(note){
    const newNotesList = this.state.notes;
    const newID = newNotesList.length + 1;
    newNotesList.push({ id: newID, title: note.title, content: note.content })
    this.setState({ notes: newNotesList })
  }

  //Handling notes selection
  updateNotesSelection(selectedNote, isShiftPressed){
    if(!isShiftPressed){
      this.clearNotesSelection(selectedNote);
    }else{
      const noteIndex = this.state.notes.indexOf(selectedNote);
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