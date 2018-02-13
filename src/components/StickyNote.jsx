import React, {Component} from 'react'; 

class StickyNote extends Component {

  constructor(props){
    super(props);

    this.state = {
      stickyNote : this.props.stickyNote,
      selected: false
    }
  }

  render() {
    return (
      <div>
          <div className={"sticky-note" + (this.state.selected ? ' selected' : '')} onClick={this.toggleSelect.bind(this)}>
            <h3>{this.state.stickyNote.title}</h3>
            <textarea placeholder="Double click on a note to edit it">{this.props.stickyNote.content}</textarea>
          </div>
      </div>
    );
  }

  toggleSelect(){
    var inverseSelected = !this.state.selected
    this.setState({ selected: inverseSelected})
  }
}

export default StickyNote;