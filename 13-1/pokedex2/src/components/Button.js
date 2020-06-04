import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button 
          style={{margin: 0}}
          onClick={() => this.props.onclick()}
        >
          Próximo
        </button>
      </div>
    );
  }
}

export default Button;