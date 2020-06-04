import React, { Component } from 'react';
import '../css/Box.css';

class Box extends Component {
  render() {
    return (
      <div className="box" style={{height: this.props.height}}>
        {this.props.content}
      </div>
    );
  }
}

export default Box;