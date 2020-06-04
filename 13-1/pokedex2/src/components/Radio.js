import React, { Component } from 'react';

class Radio extends Component {
  render() {
    return (
      <div>
        <input type="radio" name="class" value={this.props.value} />{this.props.value}
      </div>
    );
  }
}

export default Radio;