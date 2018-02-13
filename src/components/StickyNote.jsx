import React, {Component} from 'react'; 

class StickyNote extends Component {
  render() {
    return (
      <div>
          <div className="sticky-note">
            <textarea>My note content</textarea>
          </div>
      </div>
    );
  }
}

export default StickyNote;