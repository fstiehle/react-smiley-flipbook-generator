import React from "react";
import ReactDOM from "react-dom";

export default class Form extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.name,
      event.target.value.replace(" ", ""));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>          
          <input type="text"
           maxLength="31"
           name="smileys"
           value={this.props.smileys}
           onChange={this.handleChange}/>
          Smileys (seperated by comma)
        </label>
        <label>          
          <input type="number"
           step="0.1"
           maxLength="1"
           min="0"
           max="2"
           name="delay"
           value={this.props.delay}
           onChange={this.handleChange}/>
          Delay between Smileys (seconds)
        </label>
      </form>
    );
  }
}