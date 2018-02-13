import React, {Component} from 'react'; 

class StickyNote extends Component {

  constructor(props){
    super(props);

    this.state = {
      stickyNote : this.props.stickyNote
    }
  }

  render() {
    return (
      <div>
          <div className="sticky-note">
            <h3>{this.state.stickyNote.title}</h3>
            <textarea placeholder="Double click on a note to edit it">{this.props.stickyNote.content}</textarea>
          </div>
      </div>
    );
  }
}

export default StickyNote;