import React, {Component} from 'react'; 

class StickyNote extends Component {

  constructor(props){
    super(props);

    this.state = {
      stickyNote : this.props.stickyNote,
      selected: false,
      disabled: this.props.disabled,
      duplicatedNote: {}
    }
  }

  render() {
    return (
      <div>
          <div 
            className={"sticky-note" + (this.state.selected ? ' selected' : '')} 
            onClick={this.toggleSelect.bind(this)} 
            onDoubleClick={this.editNote.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            tabIndex="0">
              <h3>{this.state.stickyNote.title}</h3>
              <textarea disabled={this.state.disabled} placeholder="Double click on a note to edit it" ref="noteContent">{this.props.stickyNote.content}</textarea>
          </div>
      </div>
    );
  }

  toggleSelect(e){
    var inverseSelected = !this.state.selected
    this.setState({ selected: inverseSelected })
    if(e.shiftKey){
      console.log('shift key is pressed')
    }
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
      this.state.duplicatedNote = this.state.stickyNote;
    }

    if(e.metaKey && charCode === 'v') {
      if(this.state.duplicatedNote != undefined) {
        this.duplicateNote(this.state.duplicatedNote);
      }

    }

    //Listening for Ctrl key
    if(e.ctrlKey && charCode === 'c') {
      this.state.duplicatedNote = this.state.stickyNote;
    }

    if(e.ctrlKey && charCode === 'v') {
      if(this.state.duplicatedNote != undefined) {
        this.duplicateNote(this.state.duplicatedNote);
      }

    }
  }
}

export default StickyNote;