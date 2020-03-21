import React,{Suspense} from 'react';
import NoLazyCom from "./components/NoLazyCom";
import {ErrorBoundary} from "./ErrorBoundary";
const LazyCom = React.lazy(() => import('./components/LazyCom'));

function App() {
  const Loading = (
    <h3>loading...</h3>
  );

  return (
    <div className="App">
      <NoLazyCom />
      <ErrorBoundary>
        <Suspense fallback={Loading}>
          <LazyCom />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
