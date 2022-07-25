import './App.css';
import { useSnapshot } from 'valtio';
import state from './State';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './components/Main';
import Video from './components/Video';

// import TransferForm from './components/TransferForm';
// import ProgressBar from './components/ProgressBar';
// import Intro from './components/Intro';

function App() {
  const snap = useSnapshot(state);

  return (
    <div className="App">
      <ErrorBoundary>
        <Main />
        {/* <main>
          <div className="banner">
            <img src={require("./assets/images/sligoil-banner.gif")} />
          </div>
          <div className="banner">
            <img src={require("./assets/images/crypto-transfer-title.gif")} />
          </div>
          <ErrorBoundary>
          <div className="transfer-wrap">
            {state.startProgress ?
              <ErrorBoundary><ProgressBar /></ErrorBoundary> : (state.showForm ?
                <ErrorBoundary><TransferForm /></ErrorBoundary> : <Intro />) }
          </div>
          </ErrorBoundary>
          <div className="banner">
            <img src={require("./assets/images/vox-ad.gif")} />
          </div>
        </main> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
