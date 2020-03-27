import React from 'react';
import './App.css';
import MouseForRenderProps from "./components/MouseForRenderProps";
import {Cat} from "./components/MouseForHOC";

function App() {
  return (
    <div className="App">
      <MouseForRenderProps />
      <Cat />
    </div>
  );
}

export default App;
