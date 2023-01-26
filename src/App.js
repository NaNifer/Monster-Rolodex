import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: 12345,
        },
        {
          name: "Frank",
          id: 12346,
        },
        {
          name: "Jackie",
          id: 12347,
        },
        {
          name: "Nifer",
          id: 12348,
        },
      ]

    };

  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    )
  }

export default App;
