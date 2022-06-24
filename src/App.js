import './App.css';
import TransferForm from './components/TransferForm';
import ProgressBar from './components/ProgressBar';
import Intro from './components/Intro';
import { useSnapshot } from 'valtio';
import state from './State';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const snap = useSnapshot(state);

  return (
    <div className="App">
      <div className="banner">
        <img src={require("./assets/images/sligoil-banner.gif")} />
      </div>
      <div className="banner">
        <img src={require("./assets/images/crypto-transfer-title.gif")} />
      </div>
      <ErrorBoundary>
      <div className="transfer-wrap">
        {state.startProgress ?
          <ProgressBar /> :
          (state.showForm ?
            <ErrorBoundary><TransferForm /></ErrorBoundary> : 
            <Intro />) }
      </div>
      </ErrorBoundary>
      <div className="banner">
        <img src={require("./assets/images/vox-ad.gif")} />
      </div>
    </div>
  );
}

export default App;
