import React, {Component} from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
 
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return(
      <div style={{color: 'blue', textAlign: 'center', marginTop:80}}>
        <button className="visibility-btn" style={{backgroundColor: 'yellow'}}
        onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide List' : 'Show List'}</button>
        {this.state.isVisible && <List/>} 
      </div>
    )
        }
  }


export default App;

/**
 * 
 * Create a project using create-react-app.
Transform the App.js into a class-based component.
Implement a state for this class containing a
 Person ={ fullName,bio, imgSrc, profession } and a boolean shows.
Add a button that toggles the show state. When the
 show state is true, the person's profile will appear.
Create a field that shows the time interval since 
the last component was mounted using the component lifecycle.
Hint: use the setInterval method.
 */
