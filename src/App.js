import React, { Component } from 'react';
import './App.css';
import { Provider } from './Provider';

class App extends Component {
  render() {
    return (
      <div>
      <React.Fragment>
        <Provider>
          <h1>This is lesson ninja</h1>
        </Provider>
      </React.Fragment>
      </div>
    );
  }
}

export default App;