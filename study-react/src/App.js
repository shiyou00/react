import React, { Component } from 'react';
import JsxCom from './JsxCom';
import ListOfTenThings from './Repeat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxCom />
        <ListOfTenThings />
      </div>
    );
  }
}

export default App;
