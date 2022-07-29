import React from "react";
import { useSnapshot } from 'valtio';
import state from './State';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './components/Main';
import Video from './components/Video';

function App() {
  const snap = useSnapshot(state);
  //set Valtio state (contains startProgress, showForm, progressFinished)
  return (
    <div className="App" style={state.progressFinished ? {display: "flex", height: "100vh"} : {display: "block"}}>
      <ErrorBoundary>
        {state.progressFinished ? <Video /> : <Main />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
