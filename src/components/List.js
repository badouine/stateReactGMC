import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        console.log('constructor()');
        super(props);
        this.state = {
            interval: null,
            timer: 0,
        };
    }

    componentDidMount() {
        console.log('componentDidMount()');
        this.setState({
            interval: setInterval(()=> {
                this.setState({ timer: this.state.timer + 1});
            }, 1000),
        });
    }

    componentDidUpdate() {
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
        clearInterval(this.state.interval);
    }

    tosees = [
        './avatar.jpeg',
        'Alioune Badara Nzale',
        'Enhanced Tech',
        'Full Stack JS student',
      ];

      render() {
          console.log('render()');
          return (
            <div>
            {this.tosees.map((tosee,i)=> (
              <p key={i}>{tosee}</p>
            ) ) }
                <h2>{this.state.timer}</h2>
            </div>
          );
      }
}

export default List;