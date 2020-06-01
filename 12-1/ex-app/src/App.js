import React from 'react';
// import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Acordar cedo', 'Tomar café', 'Estudar'];

class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <ul>
        {taskList.map((t => task(t)))}
      </ul>
    );
  }
}

export default App;
