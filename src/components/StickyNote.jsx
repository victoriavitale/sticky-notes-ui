import React, {Component} from 'react'; 

class StickyNote extends Component {

  constructor(props){
    super(props);

    this.state = {
      note : this.props.note,
      disabled: this.props.disabled,
      duplicatedNote: {}
    }
  }

  render() {
    return (
      <div>
          <div 
            className={"sticky-note" + (this.state.note.selected ? ' selected' : '')} 
            onClick={this.toggleSelect.bind(this)} 
            onDoubleClick={this.editNote.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            tabIndex="0">
              <input 
                type="text" 
                value={this.state.note.title} 
                onChange={this.onTitleChange.bind(this)}/>
              <textarea
                value={this.state.note.content}
                onChange={this.onContentChange.bind(this)}
                disabled={this.state.disabled} 
                placeholder="Double click on a note to edit it" 
                ref="noteContent">
              </textarea>
          </div>
      </div>
    );
  }

  onContentChange(e){
    this.state.note.content = e.target.value
    this.setState({note: this.state.note});
  }

  onTitleChange(e){
    this.state.note.title = e.target.value
    this.setState({note: this.state.note});
  }

  toggleSelect(e){
    this.state.note.selected = !this.state.note.selected
    this.setState({ note: this.state.note })
    this.props.onNoteSelect(this.state.note, e.shiftKey);
  }

  editNote(){
    this.setState({ disabled: false })
    this.refs.noteContent.focus();
  }

  duplicateNote(note){
    this.props.onDuplicateNote(note);
  }

  handleKeyDown(e){
    let charCode = String.fromCharCode(e.which).toLowerCase();

    //Listening for Cmd key
    if(e.metaKey && charCode === 'c') {
      this.state.duplicatedNote = this.state.note;
    }

    if(e.metaKey && charCode === 'v') {
      if(this.state.duplicatedNote != undefined) {
        this.duplicateNote(this.state.duplicatedNote);
      }

    }

    //Listening for Ctrl key
    if(e.ctrlKey && charCode === 'c') {
      this.state.duplicatedNote = this.state.note;
    }

    if(e.ctrlKey && charCode === 'v') {
      if(this.state.duplicatedNote != undefined) {
        this.duplicateNote(this.state.duplicatedNote);
      }

    }
  }
}

export default StickyNote;