import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tile, { types } from './components/Tile'

import plan from './plan'

console.log('plan', plan);

class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontSize: 10 }}>
        <div>
          {
            Object.keys(types).map((type) => (
              <div key={ type }>
                { type }: <Tile type={ type } />
              </div>
            ))
          }
        </div>
        <div>
          {
            plan.map((cols, row) =>
              <div key={`${row}-${JSON.stringify(cols)}`} style={{ display: 'flex' }}>
                {
                  cols.map((type, col) => (
                    <Tile key={ `${type}-${row}-${col}` } {...{ type, row, col, plan }} />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
