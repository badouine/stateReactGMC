import React, {Component} from 'react';
import photo from './avatar.jpeg';
import './App.css';

class App extends Component {
  state = {
    isVisible: false
  }
  tosees = [
    'Alioune Badara Nzale',
    'Enhanced Tech',
    'Full Stack JS student',
  ]

  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return(
      <div>
        <button className="visibility-btn" onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide List' : 'Show List'}</button>
        {this.state.isVisible ? 
          
          (
          <ul className="list">
            {this.tosees.map((tosee,i)=> (
              <li key={i}>{tosee}</li>
            ) ) }
          </ul>) : ( <h4>Click on the button to show list</h4> )
        }
        
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
