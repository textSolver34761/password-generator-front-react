import React, { Component } from "react";

class Password extends Component {
  
  state = {
    ck: ""
  };

  handleChange = (event) => {
    this.setState({
      ck: event.target.value
    });
  };

  logValue = () => {
    console.log(this.state.ck);
  };

  render() {
    return (
      <div>
        <h1>My password generator</h1>
        <div>
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            value="symbols"
            onChange={this.handleChange}
          />
          Symbols (&, !, ? ...)
          <button onClick={this.logValue}>Log value</button>
        </div>
        <div>
          <input type="checkbox" id="capital" name="capital" value="capital" />
          Capital letter (A, C, D, ...)
        </div>
        <div>
          <input type="checkbox" id="small" name="small" value="small" />
          Small letter (a, c, d ...)
        </div>
        <div>
          <div>password lengh :</div>
          <div> choose beeween 1 and 12 characters </div>
          <input type="range" min={1} max={12} />
        </div>
        <button className="btn btn-alerte" onClick={this.handleChange}>
          GENERATE
        </button>
      </div>
    );
  }
}

export default Password;
