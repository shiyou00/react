import React from 'react';
import { ErrorBoundary } from "./ErrorBoundary";
import WillError from "./WillErrorComponent";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <WillError />
      </div>
    </ErrorBoundary>
  );
}

export default App;
