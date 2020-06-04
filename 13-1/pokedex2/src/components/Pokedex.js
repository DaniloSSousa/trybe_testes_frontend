import React, { Component } from 'react';
import '../css/Pokedex.css'
import Screen from './Screen.js';
import Box from './Box.js';
import data from '../data.js';
import Button from './Button.js';
import Radio from './Radio.js';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      view: data[0],
    };
  }
  
  index = 0;
  lengthData = data.length;

  nextPokemon = () => {
    if (this.index < this.lengthData && this.index !== (this.lengthData - 1)) {
      this.index += 1;
      return this.setState(() => {
        return {
          view: data[this.index],
        };
      });
    }
    this.index = 0;
    return this.setState(() => {
      return {
        view: data[this.index],
      };
    });
  } 

  render() {
    return (
      <div className="pokedex">
        <p className="title">POKEDEX</p>
        <Screen view={this.state.view} />
        <Box 
          content={
            <div className="buttons">
              <Button onclick={this.nextPokemon} />
              <form>
                <Radio value="Fire" />
                <Radio value="Psychic" />
              </form>
            </div>
          }
          height="220px"
        />
      </div>
    );
  }
}

export default Pokedex;