import React from "react";
import ReactDOM from "react-dom";
import gifshot from "gifshot";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.processing = false;
    
    this.state = {
      gif: ""
    }
  }
 
  componentDidMount() {
    this.canvas = document.createElement("canvas");
    if (!this.canvas.getContext) {
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'rgb(200, 0, 0)';
    this.width = this.refs.canvas.clientWidth;
    this.canvas.width = this.width;
    this.canvas.height = this.width;
    this.ctx.font = this.width * 0.6 + "px serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.updateCanvas();
  }

  componentDidUpdate() {
    if (!this.processing && this.props.delay != 0)
      this.updateCanvas();
  }

  updateCanvas() {
    this.processing = true;
    const center = [this.width / 2, this.width / 2];
    const images = [];
    for (let smiley of this.props.smileys) {
      this.fillCanvas();
      this.ctx.fillText(smiley, center[0], center[1]);
      images.push(this.canvas.toDataURL("image/jpeg", 0.8));
    }
    gifshot.createGIF(
      {'images': images,
       'interval': this.props.delay,
       'gifWidth': this.width,
       'gifHeight': this.width}, (obj) => {
          if (!obj.error)
            this.setState({gif : obj.image});
            this.processing = false;
    });
  }

  fillCanvas() {
    this.ctx.rect(0, 0, this.width, this.width);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }

  render() {
    const url = window.location.href;
    return(
      <div ref="canvas" className="canvas">
        <img src={this.state.gif} /> 
        <p><a href={this.state.gif} download="Smiley Flipbook">Save the gif</a> or Copy the Link: 
         <input className="share" readOnly type="text" 
          onClick={(e) => {e.target.setSelectionRange(0,e.target.value.length)}} value={url}/>
        </p>
      </div>
    );
  }
}