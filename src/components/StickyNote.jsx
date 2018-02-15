import React, {Component} from 'react'; 

class StickyNote extends Component {
  constructor(props){
    super(props);

    this.state = {
      note: this.props.note,
      isFormDisabled: true,
      duplicatedNote: {}
    }
  }

  render() {
    return (
      <div>
          <div 
            className={"sticky-note" + (this.state.note.selected ? ' selected' : '')} 
            onClick={this.toggleSelect.bind(this)} 
            onDoubleClick={this.enableForm.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            tabIndex="0">
              <input 
                type="text" 
                value={this.state.note.data.title} 
                onChange={this.onTitleChange.bind(this)}
                disabled={this.state.isFormDisabled}
                onBlur={this.disableForm.bind(this)}
                placeholder="New Note"/>
              <textarea
                value={this.state.note.data.content}
                onChange={this.onContentChange.bind(this)}
                disabled={this.state.isFormDisabled} 
                placeholder="Double click on a note to edit it" 
                ref="noteContent"
                onBlur={this.disableForm.bind(this)}>
              </textarea>
          </div>
      </div>
    );
  }

  //Note form data update
  onContentChange(e){
    this.state.note.data.content = e.target.value
    this.setState({ note: this.state.note });
  }

  onTitleChange(e){
    this.state.note.data.title = e.target.value
    this.setState({ note: this.state.note });
  }

  //Handling note selection
  toggleSelect(e){
    this.state.note.selected = !this.state.note.selected
    this.setState({ note: this.state.note })
    this.props.onNoteSelect(this.state.note, e.shiftKey);
  }

  //Enable/Disable form to edit note
  disableForm(){
    this.setState({ isFormDisabled: true })
  }

  enableForm(){
    this.setState({ isFormDisabled: false })
    this.refs.noteContent.focus();
  }

  // Copying notes on Ctrl/Cmd + C and duplicating on Ctrl/Cmd + V, only if note is not being edited
  handleKeyDown(e){
    let charCode = String.fromCharCode(e.which).toLowerCase();

    if(this.state.isFormDisabled){
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

  duplicateNote(note){
    this.props.onDuplicateNote(note);
  }
}

export default StickyNote;