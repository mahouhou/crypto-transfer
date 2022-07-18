import TransferForm from './TransferForm';
import ProgressBar from './ProgressBar';
import Intro from './Intro';
import { useSnapshot } from 'valtio';
import state from '../State';
import ErrorBoundary from './ErrorBoundary';

function Main() {
    const snap = useSnapshot(state);

    return (
        <main>
            <div className="banner">
                <img src={require("../assets/images/sligoil-banner.gif")} />
            </div>
            <div className="banner">
                <img src={require("../assets/images/crypto-transfer-title.gif")} />
            </div>
            <ErrorBoundary>
            <div className="transfer-wrap">
                {state.startProgress ?
                    <ErrorBoundary><ProgressBar /></ErrorBoundary> : (state.showForm ?
                        <ErrorBoundary><TransferForm /></ErrorBoundary> : <Intro />) }
            </div>
            </ErrorBoundary>
            <div className="banner">
                <img src={require("../assets/images/vox-ad.gif")} />
            </div>
         </main>
    )
}

export default Main;