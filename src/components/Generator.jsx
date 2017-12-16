import React from "react";
import ReactDOM from "react-dom";
import Form from './Form.jsx'
import Canvas from './Canvas.jsx'
import { withRouter } from 'react-router-dom'

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    let smileys = ["🤠", "🐷", "👍"];
    let delay = 0.6;

    if (this.props.match.params.smileys != undefined
      && this.props.match.params.delay != undefined) {
        smileys = this.props.match.params.smileys.split(",");
        delay = this.props.match.params.delay;
      }

    this.state = {
      smileys: smileys,
      delay: delay
    };    
  }

  handleChange(name, value) {
    if (name === "smileys") {
      this.setState({smileys: value.replace(" ", "").split(",")});
      this.props.history.replace(value.split(",") + "&" + this.state.delay);
    } else if (name === "delay") {
      this.setState({delay: value});
      this.props.history.replace(this.state.smileys + "&" + value);
    }
  }

  render() {
    return(
      <div>
        <h1>Smiley Flipbook Generator</h1>
        <Form smileys={this.state.smileys}
                  delay={this.state.delay}
                  onChange={this.handleChange.bind(this)}/>
        <Canvas smileys={this.state.smileys} delay={this.state.delay}/>
      </div>
    );
  }
}

