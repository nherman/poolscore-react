import React, { Component } from 'react';
import './style.css';


function updateStateInteger(field, amt) {
  this.setState(function(prevState, props) {

    if (!Number.isInteger(amt)) return;

    var v = prevState[field];
    if (!Number.isInteger(v)) return;

    var r = {};
    r[field] = v+amt;

    if (r[field] < 0) return;

    return r;
  });
}


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordinal: null,
      innings: 0
    };

    this.incrementInnings = this.incrementInnings.bind(this);
    this.decrementInnings = this.decrementInnings.bind(this);
  }

  incrementInnings() {
    updateStateInteger.call(this,"innings", 1);
  }
  decrementInnings() {
    updateStateInteger.call(this,"innings", -1);
  }

  render() {
    return (

      <div className="game-detail">
          <h1>GAME {this.state.ordinal !== null && <span>#{this.state.ordinal}</span> }</h1>
          <div className="innings-row">
              <div className="minus"><button type="button" onClick={this.decrementInnings}>-</button></div>
              <div className="innings">
                  {this.state.innings}
                  <h6>INNINGS</h6>
              </div>
              <div className="plus"><button type="button" onClick={this.incrementInnings}>+</button></div>
          </div>
          <hr className="hr-sm" />
      </div>

    );
  }
}


class App extends Component {
  render() {
    return (<Game />);
  }
}

export default App;
