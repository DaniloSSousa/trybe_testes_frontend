import React, { Component } from 'react';
import '../css/Screen.css';
import Box from './Box.js';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <Box
          content={
            <div style={{display: 'flex'}}>
              <img 
                style={{
                  border: '1px solid black',
                  margin: 0,
                }}
                src={this.props.view.image}
                alt="Pokemon"
                width="165"
                height="165"
              />
              <Box 
                content={
                  <div>
                    <p>{this.props.view.name}</p>
                    <p>{this.props.view.type}</p>
                    <p>Average weight: {this.props.view.averageWeight.value} 
                      {this.props.view.averageWeight.measurementUnit}
                    </p>
                  </div>
                }
              />
            </div>
          }
          height="180px"
        />
      </div>
    );
  }
}

export default Screen;